try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.lang="ar-MA";
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}

// var idM = $('#idM');
var noteTextarea = $('#note-textarea1');
var noteTextarea2 = $('#note-textarea2');
var noteTextarea3 = $('#note-textarea3');
var noteTextarea4 = $('#note-textarea4');
var instructions = $('#recording-instructions1');
var instructions2 = $('#recording-instructions2');
var instructions3 = $('#recording-instructions3');
var instructions4 = $('#recording-instructions4');
var notesList = $('ul#notes');

var noteContent = '';
var note_textarea1=document.getElementById("note-textarea1").value;
var note_textarea2=document.getElementById("note-textarea2").value;
var note_textarea3=document.getElementById("note-textarea3").value;
var note_textarea4=document.getElementById("note-textarea4").value;

/*-----------------------------
      Voice Recognition
------------------------------*/
recognition.continuous = true;

recognition.onresult = function(event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  event.results[current][0].transcript;
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
    noteTextarea2.val(noteContent);
    noteTextarea3.val(noteContent);
    noteTextarea4.val(noteContent);
    // idM.val(idM);

  }
};
/*-----------------------------
      App buttons and input 1 
------------------------------*/

$('#start-record-btn1').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
  recognition.onstart = function() { 
  instructions.text('تم تفعيل التعرف على الصوت. حاول التحدث في الميكروفون');
  noteTextarea.val('');
  noteContent = '';
  }

});

noteTextarea.on('input', function() {
  noteContent = $(this).val();
})

$('#pause-record-btn1').on('click', function(e) {
  recognition.stop();
  if(!noteContent.length) {
    instructions.text('تعذر حفظ ملاحظة فارغة. الرجاء إضافة رسالة إلى ملاحظتك');
  }
   else {
    instructions.text('تم حفظ الملاحظة بنجاح');
    note_textarea1 = document.getElementById("note-textarea1").value;
    noteTextarea.val(note_textarea1);
    noteTextarea2.val(note_textarea2);
    noteTextarea3.val(note_textarea3);
    noteTextarea4.val(note_textarea4);

  }
      
})


/*-----------------------------
      App buttons and input 2 
------------------------------*/

$('#start-record-btn2').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();  
  recognition.onstart = function() { 
  instructions2.text('تم تفعيل التعرف على الصوت. حاول التحدث في الميكروفون');
  noteTextarea2.val('');
  noteContent = '';
}
  noteTextarea.val(note_textarea1);
  noteTextarea2.val(note_textarea2);
  noteTextarea3.val(note_textarea3);
  noteTextarea4.val(note_textarea4);
});

noteTextarea2.on('input', function() {
  noteContent = $(this).val();
})

$('#pause-record-btn2').on('click', function(e) {
  recognition.stop();
  if(!noteContent.length) {
    instructions2.text('تعذر حفظ ملاحظة فارغة. الرجاء إضافة رسالة إلى ملاحظتك');
    }
   else{
      instructions2.text('تم حفظ الملاحظة بنجاح');
      noteContent = '';
      note_textarea2 = document.getElementById("note-textarea2").value;
      noteTextarea.val(note_textarea1);
      noteTextarea2.val(note_textarea2);
      noteTextarea3.val(note_textarea3);
      noteTextarea4.val(note_textarea4);

    }
      
})




/*-----------------------------
      App buttons and input 3 
------------------------------*/

$('#start-record-btn3').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
  recognition.onstart = function() { 
  instructions3.text('تم تفعيل التعرف على الصوت. حاول التحدث في الميكروفون');
  noteTextarea3.val('');
  noteContent = '';
}
  noteTextarea.val(note_textarea1);
  noteTextarea2.val(note_textarea2);
  noteTextarea3.val(note_textarea3);
  noteTextarea4.val(note_textarea4);
});

noteTextarea3.on('input', function() {
  noteContent = $(this).val();
})

$('#pause-record-btn3').on('click', function(e) {
  recognition.stop();
  if(!noteContent.length) {
    instructions3.text('تعذر حفظ ملاحظة فارغة. الرجاء إضافة رسالة إلى ملاحظتك');
  }
   else{
      instructions3.text('تم حفظ الملاحظة بنجاح');
      noteContent = '';
      note_textarea3 = document.getElementById("note-textarea3").value;
      noteTextarea.val(note_textarea1);
      noteTextarea2.val(note_textarea2);
      noteTextarea3.val(note_textarea3);
      noteTextarea4.val(note_textarea4);
    }

})



/*-----------------------------
      App buttons and input 4 
------------------------------*/

$('#start-record-btn4').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
  recognition.onstart = function() { 
  instructions4.text('تم تفعيل التعرف على الصوت. حاول التحدث في الميكروفون');
  noteTextarea4.val('');
  noteContent = '';
}
  noteTextarea.val(note_textarea1);
  noteTextarea2.val(note_textarea2);
  noteTextarea3.val(note_textarea3);
  noteTextarea4.val(note_textarea4);
});

noteTextarea4.on('input', function() {
  noteContent = $(this).val();
})

$('#pause-record-btn4').on('click', function(e) {
  recognition.stop();
  if(!noteContent.length) {
    instructions2.text('تعذر حفظ ملاحظة فارغة. الرجاء إضافة رسالة إلى ملاحظتك');
    }
   else{
    instructions4.text('تم حفظ الملاحظة بنجاح');
    noteContent = '';
    note_textarea4 = document.getElementById("note-textarea4").value;
    noteTextarea.val(note_textarea1);
    noteTextarea2.val(note_textarea2);
    noteTextarea3.val(note_textarea3);
    noteTextarea4.val(note_textarea4);
    }    
})
// /*-----------------------------
//       Speech Synthesis 
// ------------------------------*/

// function readOutLoud(message) {
//  var speech = new SpeechSynthesisUtterance();

//   // Set the text and voice attributes.
//  speech.text = message;
//  speech.volume = 1;
//  speech.rate = 1;
//  speech.pitch = 1;
  
//  window.speechSynthesis.speak(speech);
// }



/*-----------------------------
      Helper Functions 
------------------------------*/

// function renderNotes(notes) {
//   var html = '';
//   var num=1;  
//   if(notes.length) {
//     notes.forEach(function(note) {
//       html+= `<li class="note">
//         <p class="header">
//           <span class="date">${note.date}</span>
//           <a href="#" class="delete-note" title="Delete">حذف</a>
//         </p>
//         <p class="num">${num}</p>
//         <p class="content">${note.content}</p>
//       </li>`;
//       num=num+1;    
//     });
//   }
//   else {
//     html = '<li><p class="content">ليس لديك أية ملاحظات حتى الآن</p></li>';
//   }


//   notesList.html(html);
// }


// function saveNote(dateTime, content,num) {
//   localStorage.setItem('note-' + dateTime, content,num);
// }


// function getAllNotes() {
//   var notes = [];
//   var key;
//   for (var i = 0; i < localStorage.length; i++) {    
//       key = localStorage.key(i);
//       if(key.substring(0,5) == 'note-') {
//         notes.push({
//           content: localStorage.getItem(key),
//           date: key.replace('note-',''),          
//         });
//       }   
//   }
//   notes =notes.sort(function (a, b) {
//     return a.date.localeCompare(b.date);
// });
//   return notes;
// }
// console.log(notes);
// var json = JSON.stringify(notes);
// console.log(json);


// function deleteNote(dateTime) {
//   localStorage.removeItem('note-' + dateTime); 
// }

