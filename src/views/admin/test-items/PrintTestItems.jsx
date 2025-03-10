import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import QRCode from 'react-qr-code';

import { Paper, Typography, Button, Divider, Backdrop, CircularProgress, Stack, Checkbox } from '@mui/material';
import moment from 'moment';
// const apiUrl = process.env.REACT_APP_API_URL;

import { useLocation } from 'react-router-dom';
import { getSampleSubmissionsByID } from 'services/_api/sampleSubmissionsRequest';

const printPageStyle = {
  width: '80mm',
  // minHeight: '80mm',
  padding: '18px 24'
};

function PrintTestItems() {
  const location = useLocation();

  const sampleSubId = location.state?.sampleSubId;
  const productCompanyName = location.state?.productCampanyName;
  const [loading, setLoading] = useState(false);

  //   const prurl = window.location.origin + '/sampleSub/detail/' + sampleSubId;

  useEffect(() => {
    getSampleSubmission(sampleSubId);
  }, [sampleSubId]);

  const [sampleSub, setSampleSub] = useState([]);

  const getSampleSubmission = (id) => {
    return new Promise(() => {
      setLoading(true);
      setTimeout(() => {
        getSampleSubmissionsByID(id).then((result) => {
          setSampleSub(result);
        });
        // var requestOptions = {
        //   method: 'GET',
        //   redirect: 'follow'
        // };

        // fetch(apiUrl + '/queue/' + id, requestOptions)
        //   .then((response) => response.json())
        //   .then((result) => {
        //     result.map((data) => {
        //       setSampleSub(data);
        //     });
        //     setLoading(false);
        //   })
        //   .catch((error) => console.log('error', error));
      }, 100);
    });
  };

  // ========= [ Click print ]  ========= //
  const [isPrinting, setIsPrinting] = useState(false);
  const handlePrint = () => {
    setIsPrinting(true);

    setTimeout(() => {
      window.print();
    }, 500);

    setTimeout(() => {
      setIsPrinting(false);
    }, 1000);
  };
  const navigate = useNavigate();
  const backTo = () => {
    navigate('/admin/test-items');
  };
  return (
    <>
      <Paper style={{ ...printPageStyle }} elevation={2} sx={{ m: { xs: 'auto', md: '10px auto' } }}>
        {loading && (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 0, backgroundColor: 'rgb(245 245 245 / 50%)!important' }}
            open={loading}
          >
            <CircularProgress color="primary" />
          </Backdrop>
        )}
        <div alignItems="center" justifyContent="space-between">
          <div container rowSpacing={1} columnSpacing={2.75}>
            <div item xs={12} align="center" sx={{ mt: 3 }}>
              {/* <img src={logo} alt="Company Logo" className="logo" style={{ width: '80px', textAlign: 'center' }} /> */}
              <Typography variant="h5" gutterBottom>
                {/* บริษัท ไอ ซี พี เฟอทิไลเซอร์ จำกัด */}
                {/* {productCompanyName ? productCompanyName : ' บริษัท ไอ ซี พี เฟอทิไลเซอร์ จำกัด'} */}
              </Typography>
              {/* <Typography gutterBottom sx={{ fontSize: 18 }}>
                ยินดีต้อนรับ
              </Typography> */}
              <Divider light sx={{ mb: 0 }} />
            </div>
            <div item xs={12} align="center">
              <QRCode value={prurl} className="qr-code" size={128} />

              <Stack justifyContent="center" alignItems="center" flexDirection="row">
                <Typography variant="h5" gutterBottom sx={{ mb: 0 }}>
                  หมายเลขคิว :
                </Typography>
                {/* <Typography variant="h5" gutterBottom sx={{ pl: 1, mb: 0 }}>
                  <span style={{ fontSize: 30 }}>{sampleSub.token && ' ' + sampleSub.token.slice(0, 2) + ' ' + sampleSub.token.slice(2, 9)}</span>
                </Typography> */}
              </Stack>

              {/* <Typography variant="h5" gutterBottom sx={{ mt: 0 }}>
                ลำดับคิว : <strong style={{ color: 'red', fontSize: '32px' }}>{padZero(sampleSub.queue_number)}</strong>
              </Typography> */}

              {/* <Typography variant="h5" gutterBottom>
                ทะเบียนรถ : <strong></strong>
              </Typography> */}
              <Stack justifyContent="center" alignItems="center" flexDirection="row">
                <Typography variant="h5">
                  <strong>คลุมผ้าใบ : </strong>
                </Typography>
                {/* <Typography variant="h5" sx={{ ml: 1 }}>
                  <strong>ตัวแม่</strong>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'Checkbox' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />
                </Typography>
                <Typography variant="h5">
                  <strong>ตัวลูก</strong>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'Checkbox' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />
                </Typography> */}
              </Stack>
              {/* <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                เวลารถออก ....................... น.
              </Typography> */}
            </div>
            <div item xs={12} align="center" sx={{ pt: 2, pb: 2 }}>
              {moment(new Date()).format('DD/MM/YY HH:mm:ss')}
            </div>
          </div>
        </div>
      </Paper>

      <div item xs={12} sx={{ '& button': { m: 1 }, mt: 3, width: { xs: '100%', lg: '100%' } }} align="center">
        <Button variant="contained" color="primary" onClick={handlePrint} style={{ display: isPrinting ? 'none' : 'inline-flex' }}>
          พิมพ์
        </Button>

        <Button variant="contained" color="error" onClick={backTo} style={{ display: isPrinting ? 'none' : 'inline-flex' }}>
          ย้อนกลับ
        </Button>
      </div>
    </>
  );
}

export default PrintTestItems;
