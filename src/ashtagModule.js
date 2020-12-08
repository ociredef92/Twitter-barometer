import firebase from './firebase'

const db = firebase.database();

const ashtagModule = (function(){
    return {
        saveNewAshtag: function(ashtag) {
            db.ref('ashtags/').push({ // push to create a unique random key - returns an object
            ashtag: ashtag
        });
        },

        getAshtags: function(handleData) {
            db.ref('ashtags/').once('value')
            .then((snapshot) => {
                const dbValues = []
                const dbKeys =  Object.keys(snapshot.val())
                dbKeys.forEach(element => dbValues.push(snapshot.val()[element].ashtag))
                console.log(dbValues, dbKeys)
                handleData(dbValues)
            })
            .catch(error => {
                console.error(console.log('Error detected: ' + error.message));
              })
            
        },

        deleteAshtags: function(clickedElement) {
            db.ref('ashtags/').once('value')
            .then((snapshot) => {
                const dbValues = []
                const dbKeys =  Object.keys(snapshot.val())
                dbKeys.forEach(element => dbValues.push(snapshot.val()[element].ashtag))

                db.ref(`ashtags/${dbKeys[dbValues.indexOf(clickedElement)]}`).remove() // remove keys whose index correspond to element clicked
            })
            
        },

    }    
})();

export default ashtagModule