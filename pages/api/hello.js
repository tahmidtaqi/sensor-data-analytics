// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const admin = require('firebase-admin');

const serviceAccount = require('../../serviceAccountKey.json');
var userid=0;
if(admin.apps.length==0){ admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
}


const db = admin.firestore();
async function getusers(req,res) {
  //console.log(req);
  if (req.method === 'POST') {
  const iuser=req.body;
  //console.log('username->',iuser.username);
  //console.log('username->',iuser.password);
  const snapshot = await db.collection('Admin').where ('Username', '==', iuser.username).where('Password', '==', iuser.password).get();
  snapshot.forEach((doc ) => {
    //console.log(doc.id, '=>', doc.data());
    userid=doc.id;
   
  });
  res.status(200).json({'userid':userid})
}
 else {

  res.status(404).json({'error':'not ok'})
 }
  
}
export default getusers
