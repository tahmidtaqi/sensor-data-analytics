const admin = require("firebase-admin");

const serviceAccount = require("../../serviceAccountKey.json");
if (admin.apps.length == 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
async function createproject(req, res) {
  console.log(req);
  if (req.method === "POST") {
    //console.log(req.body);
    const newproject = req.body;
    console.log(newproject.userid);
    //const Ref = db.collection('Admin/KWpF0RvOynkVCROiemWT/Poject');
    console.log(JSON.stringify(newproject.userid));
    const Ref = db.collection("Admin/" + newproject.userid + "/Project");
    // console.log(Ref); newproject.projectname
    await Ref.add({
      name: newproject.projectname,
      Institution: newproject.orgname ,
      Participation_Duration: newproject. participationduration ,
      Participation_Period_Start: newproject.Participation_Period_Start,
      Participation_Period_End: newproject. Participation_Period_End,
      sensors:newproject.sensor
    });

    res.status(200).json({ userid: "got it" });
  } else {
    res.status(404).json({ errorcreate: "not ok" });
  }
}

export default createproject;
