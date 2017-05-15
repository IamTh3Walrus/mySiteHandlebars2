 $(function() {
     $("#landingButton").hide();
     $("#landingButton").toggle(1000);
     $("#landingPageImage").hide();
     $("#landingPageImage").toggle(1200);
     $("#nameFont").typed({
         strings: ["Stephen Doe"],
         typeSpeed: 300
     });
     $("#occupationFont").typed({
         strings: ["Web Developer -  Freelance Writer"],
         typeSpeed: 100
     });

     $("#aboutMe").typed({
         strings: ["About Me"],
         typeSpeed: 300
     });
     $("#contactMe").typed({
         strings: ["Contact Me"],
         typeSpeed: 300

     });
     $("#portfolioFont").typed({
         strings: ["Portfolio"],
         typeSpeed: 300

     });
 });
