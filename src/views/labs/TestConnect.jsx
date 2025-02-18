import React, { useState, useEffect } from 'react';

const SerialCommunication = () => {
  const [port, setPort] = useState(null);
  const [reader, setReader] = useState(null);
  const [readableStream, setReadableStream] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState('');
  const [ledStatus, setLedStatus] = useState('');
  const [ledValue, setLedValue] = useState('');

  useEffect(() => {
    return () => {
      if (port) {
        port.close().catch((err) => console.error('Error closing port:', err));
      }
    };
  }, [port]);

  const connectToSerial = async () => {
    try {
      const port = await navigator.serial.requestPort(); // ให้ผู้ใช้เลือกพอร์ต
      await port.open({ baudRate: 9600 });

      // const selectedPort = await navigator.serial.requestPort();
      // await selectedPort.open({ baudRate: 9600 });
      setPort(port);
      setIsConnected(true);
      readFromPort(port);

      // อ่านค่าจาก Serial
      const textDecoder = new TextDecoderStream();
      const readableStream = port.readable.pipeThrough(textDecoder);
      const reader = readableStream.getReader();

      let buffer = '';
      let deviceName = 'Unknown Device';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          buffer += value;
          let lines = buffer.split('\n');
          while (lines.length > 1) {
            const line = lines.shift().trim();
            if (line.startsWith('DEVICE_NAME:')) {
              deviceName = line.replace('DEVICE_NAME:', '').trim();
              console.log(`Connected to ${deviceName}`);
              setDeviceName(deviceName); // แสดงชื่ออุปกรณ์ใน UI
            } else {
              setMessages((prev) => [...prev, `${deviceName}: ${line}`]);
            }
          }
          buffer = lines.join('\n');
        }
      }
    } catch (error) {
      console.error('Error connecting to device:', error);
    }
  };

  const readFromPort = async (selectedPort) => {
    console.log('Reading from serial port...');
    try {
      const textDecoder = new TextDecoderStream();
      const stream = selectedPort.readable.pipeThrough(textDecoder);
      setReadableStream(stream);
      const reader = stream.getReader();
      setReader(reader);

      let buffer = ''; // ใช้เก็บข้อความที่อ่านได้

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          buffer += value; // สะสมข้อความใน buffer

          // ตรวจสอบว่ามีข้อความครบจบบรรทัด (เช่นขึ้นบรรทัดใหม่ \n)
          let lines = buffer.split('\n');
          while (lines.length > 1) {
            const line = lines.shift().trim(); // อ่านบรรทัดแรกที่ครบถ้วน
            if (line) {
              setLedValue(line);
              setMessages((prev) => [...prev, `Arduino: ${line}`]);
              if (line.includes('1')) {
                console.log(`Status from Arduino: LED ON`);
                setLedStatus('LED ON');
              } else if (line.includes('0')) {
                console.log(`Status from Arduino: LED OFF`);
                setLedStatus('LED OFF');
              }
            }
          }

          // เก็บข้อความที่เหลือไว้ใน buffer สำหรับรอข้อความถัดไป
          buffer = lines.join('\n');
        }
      }
    } catch (error) {
      console.error('Error reading from serial port:', error);
    }
  };

  const sendCommand = async (command) => {
    try {
      if (!port) throw new Error('Port is not connected.');
      const writer = port.writable.getWriter();
      await writer.write(new TextEncoder().encode(command + '\n'));
      writer.releaseLock();
    } catch (error) {
      console.error('Error sending command:', error);
    }
  };

  const disconnectSerial = async () => {
    try {
      if (reader) {
        await reader.cancel().catch((err) => console.error('Error cancelling reader:', err));
        reader.releaseLock();
      }
      if (readableStream) {
        await readableStream.cancel().catch((err) => console.error('Error cancelling stream:', err));
      }
      if (port) {
        await port.close().catch((err) => console.error('Error closing port:', err));
      }
      setPort(null);
      setReader(null);
      setReadableStream(null);
      setIsConnected(false);
      setLedStatus('');
      console.log('Serial port disconnected.');
    } catch (error) {
      console.error('Error disconnecting serial port:', error);
    }
  };

  return (
    <div>
      <h2>{deviceName}</h2>
      <div>********************</div>
      <h2>Arduino Serial Communication</h2>
      <button onClick={connectToSerial} disabled={isConnected}>
        Connect
      </button>
      <button onClick={disconnectSerial} disabled={!isConnected}>
        Disconnect
      </button>
      <button onClick={() => sendCommand('A')} disabled={!isConnected}>
        Turn ON LED
      </button>
      <button onClick={() => sendCommand('B')} disabled={!isConnected}>
        Turn OFF LED
      </button>
      <div>
        <h3>LED Status: {ledStatus}</h3>
        LED Value: <input type="text" value={ledValue} readOnly />
      </div>
      <div>
        <h3>Messages:</h3>
        <div style={{ border: '1px solid black', padding: '10px', height: '200px', overflowY: 'auto' }}>
          {messages}
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SerialCommunication;
