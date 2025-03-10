const a = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  i = async () => {
    const s = new Headers();
    s.append('Content-Type', 'application/json');
    const e = { method: 'GET', headers: s, redirect: 'follow' };
    return await (await fetch(a + '/service-requests', e)).json();
  },
  p = async (s) => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const r = { method: 'GET', headers: e, redirect: 'follow' };
    return await (await fetch(a + '/service-requests/' + s, r)).json();
  },
  d = async (s) => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const r = { method: 'GET', headers: e, redirect: 'follow' };
    return await (await fetch(a + '/service-requests/' + s, r)).json();
  },
  w = async (s) => {
    console.log('data', s);
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const r = JSON.stringify(s),
      o = { method: 'POST', headers: e, body: r, redirect: 'follow' };
    try {
      const t = await fetch(a + '/service-requests', o);
      if (!t.ok) {
        const n = await t.json();
        throw new Error(n.message || `HTTP Error: ${t.status}`);
      }
      return await t.json();
    } catch (t) {
      throw (console.error('Save ServiceRequests data Error:', t), t);
    }
  },
  u = async (s, e) => {
    const r = new Headers();
    r.append('Content-Type', 'application/json');
    const o = JSON.stringify(s),
      t = { method: 'PUT', headers: r, body: o, redirect: 'follow' };
    try {
      const n = await fetch(a + '/service-requests/' + e, t);
      if (!n.ok) {
        const c = await n.json();
        throw new Error(c.message || `HTTP Error: ${n.status}`);
      }
      return await n.json();
    } catch (n) {
      throw n;
    }
  },
  h = async (s) => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const r = { method: 'DELETE', headers: e, redirect: 'follow' };
    return await (await fetch(a + '/service-requests/' + s, r)).json();
  },
  l = async (s) => {
    console.log('data', s);
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const r = JSON.stringify(s),
      o = { method: 'POST', headers: e, body: r, redirect: 'follow' };
    try {
      const t = await fetch(a + '/service-request-documents', o);
      if (!t.ok) {
        const n = await t.json();
        throw new Error(n.message || `HTTP Error: ${t.status}`);
      }
      return await t.json();
    } catch (t) {
      throw (console.error('Save ServiceRequests data Error:', t), t);
    }
  },
  y = async (s) => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const r = { method: 'DELETE', headers: e, redirect: 'follow' };
    return await (await fetch(a + '/service-request-documents/' + s, r)).json();
  },
  q = async (s) => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const r = { method: 'PUT', headers: e, redirect: 'follow' };
    try {
      const o = await fetch(a + '/generate-request-no/' + s, r);
      if (!o.ok) {
        const t = await o.json();
        throw new Error(t.message || `HTTP Error: ${o.status}`);
      }
      return await o.json();
    } catch (o) {
      throw o;
    }
  };
export { l as a, d as b, q as c, h as d, y as e, p as f, i as g, u as h, w as p };
