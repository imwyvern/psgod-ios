
/**
 * 用户注册
 * @returns {false}
 */
function signin()
{
  var username = $('#username').val();
  var password = $('#password').val();
  var retype   = $('#retype').val();
  
  if((username!="")&&(password!="")&&(retype!="")&&(password==retype)){
    $.ajax({
      url: "/ios/reg",
      type: "post",
      dataType: 'json',
      data: {
        'username': $('#username').val(),
        'password': $('#password').val(),
        'retype'  : $('#retype').val()
      },
      beforeSend: function(){
        $('#regsubmit').attr("disabled", true);
      },
      complete: function(){
        $("#regsubmit").attr("disabled", false);
      },        
      success: function(response){
        if(response.status==1){
          alert(response.message);
        } else {
          alert(response.message);
        }
      },
      error: function(e){
       console.log(e);
      }
    });   
  } else if(username==""){    
    tips('username', '请输入用户名');
  } else if(password==""){
    tips('password', '请输入密码');
  } else if(retype==""){
    tips("retype", "请输入确认密码");
  } else if(retype!=password){
    tips("retype", "确认密码 和 密码不一致");
  }
  
  return false;
}