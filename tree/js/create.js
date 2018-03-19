$(function () {
    var flag=true;
    var flag2=true;
    var flag3=true;
   $('.total-content').on("click",function (event) {
      if(flag){
          $(this).find('img').first().attr('src','img/top.png');
          $(this).find('img').first().removeClass('bottom');
          $(this).find('img').first().addClass('top');
          $(this).find(".total-content2").css("display","block");
          $(this).find(".total-content2").find('img').first().attr('src','img/bottom.png').removeClass('top').addClass('bottom');
          flag=false;


      }
      else{
          $(this).find('img').first().attr('src','img/bottom.png');
          $(this).find('img').first().removeClass('top');
          $(this).find('img').first().addClass('bottom');
          $(this).find(".total-content2").css("display","none");
          $(this).find(".total-content3").css("display","none");
          $(this).find(".ul").css("display","none");
          flag=true;


      }
   })

    $('.total-content2').on("click",function (event) {
        if(flag2){
            $(this).find('img').first().attr('src','img/top.png');
            $(this).find('img').first().removeClass('bottom');
            $(this).find('img').first().addClass('top');
            $(this).find(".total-content3").css("display","block");
            $(this).find(".total-content3").find('img').first().attr('src','img/bottom.png').removeClass('top').addClass('bottom');
            flag2=false;
            event.stopPropagation();
        }
        else{
            $(this).find('img').first().attr('src','img/bottom.png');
            $(this).find('img').first().removeClass('top');
            $(this).find('img').first().addClass('bottom');
            $(this).find(".total-content3").css("display","none");
            $(this).find(".ul").css("display","none");
            event.stopPropagation();
            flag2=true;
        }
    })

    $('.total-content3').on("click",function (event) {
        if(flag3){
            $(this).find('img').first().attr('src','img/top.png');
            $(this).find('img').first().removeClass('bottom');
            $(this).find('img').first().addClass('top');
            $(this).find('ul').css("display","block");
            event.stopPropagation();
            flag3=false;
        }
        else{
            $(this).find('img').first().attr('src','img/bottom.png');
            $(this).find('img').first().removeClass('top');
            $(this).find('img').first().addClass('bottom');
            $(this).find('ul').css("display","none");
            event.stopPropagation();
            flag3=true;
        }
    })


    /*增加文件夹*/
    $(document).on("click",".add-mkdir",function (evevt) {
        $(".right").css("display","block");
    })

    $(document).on("click",".add-mkdir",function (evevt) {
        $(".right").css("display","block");
    })

    //删除
    $(document).on("click",".reduce-mkdir2",function (event) {
         $(this).closest(".total-content2").remove();
        event.stopPropagation();

    })

    $(document).on("click",".reduce-mkdir",function (event) {
        $(this).closest(".total-content2").remove();

    })


    /*保存*/
    $('.concat').on('click',function () {
        let jkl=$("input[type='radio']:checked").val();
        let jkl2=$(".text").val();
        alert(jkl2);
        if(jkl==1){
         if(jkl2==''){
             $('.right').css("display",'block');
             alert('请输入名称！')
         }
         else{
             $('.right').css("display",'none');
             var obj=`<div class="total-content2">
             <img src="img/bottom.png" class="bottom" alt=""><img src="img/create.png" class="create" alt="">${ jkl2 }
             <span class="add-mkdir2" value="2">+</span>
             <span class="reduce-mkdir2">-</span>
             </div>`;
             event.stopPropagation();
             $(".total-content").find('.total-content2').last().after(obj);
             $(".right").css("display","none");
         }

        }
        if(jkl==2){
            if(jkl2==''){
                $('.right').css("display",'block');
                alert('请输入名称！')
            }
            else{
                $('.right').css("display",'none');
                var obj=`<div class="total-content2">
                 <img src="img/bottom.png" class="bottom" alt=""><img src="img/mkdir.png" class="mkdir" alt="">${ jkl2 }
                 <span class="reduce-mkdir">-</span>
             </div>`;
                event.stopPropagation();
                $(".total-content").find('.total-content2').last().after(obj);
                $(".right").css("display","none");
            }

        }

    })

})