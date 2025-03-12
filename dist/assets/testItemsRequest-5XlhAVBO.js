const n = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  r = async () => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const t = { method: 'GET', headers: e, redirect: 'follow' };
    return await (await fetch(n + '/fertilizer-types', t)).json();
  },
  o = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  c = async () => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const t = { method: 'GET', headers: e, redirect: 'follow' };
    return await (await fetch(o + '/packaging-types', t)).json();
  },
  a = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  i = async () => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const t = { method: 'GET', headers: e, redirect: 'follow' };
    return await (await fetch(a + '/sample-receiving', t)).json();
  },
  l = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const s = { method: 'GET', headers: t, redirect: 'follow' };
    return await (await fetch(a + '/sample-receiving/type/' + e, s)).json();
  };
export { c as a, i as b, l as c, r as g };
