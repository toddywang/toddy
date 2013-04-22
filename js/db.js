/**
 * Created with JetBrains WebStorm.
 * User: 阳
 * Date: 13-4-17
 * Time: 下午2:36
 * To change this template use File | Settings | File Templates.
 */


var db = null;

connectToDB = function() {
    db = window.openDatabase('db','1.0', 'db','1024*1024*3');
};

createNotesTable = function() {
    db.transaction(function(tx){
        tx.executeSql(
            "CREATE TABLE notes(id INTEGRE \ PRIMARY KEY, title TEXT,note TEXT)",[],
            function(){ alert('留言数据表建立成功!');},
            function(tx, error){alert(error.message);});
    });
};

fetchNotes = function(){
    db.transaction(function(tx) {
        tx.executeSql('SELECT id, title, note FORM notes',[],
        function(SQLTransaction, data) {
            for(var i= 0; i<data.rows.length; ++i) {
                var row = data.rows.item(i);
                var id = row['id'];
                var title = row['title'];

                addToNotesList(id, title);
            }
        });
    });
};