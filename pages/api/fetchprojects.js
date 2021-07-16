// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const admin = require('firebase-admin');

const serviceAccount = require('../../serviceAccountKey.json');

if(admin.apps.length==0){ admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
}


const db = admin.firestore();
async function fetchprojects(req,res) {
     let projectinfo=[];
   //console.log(req);
  console.log(req.query.userid);
   const snapshot = await db.collection(`Admin/${req.query.userid}/Project`).get();
  //console.log(snapshot);

  snapshot.forEach((doc ) => {
    //console.log(doc.id, '=>', snapshot);
    projectinfo.push(doc.data());
   
   
  });
  res.status(200).json({'fetch':projectinfo})
}
 
  

export default fetchprojects
