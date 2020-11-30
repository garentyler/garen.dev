<template>
  <div class="projects">
    <h1>Code</h1>
    <hr />
    <h2>Professional Projects</h2>
    <hr class="smallhr" />
    <Project projectName="Easy Intake Forms" id="easyintakeforms"><a href="https://easyintakeforms.com/" target="_blank">Easy Intake Forms</a>
      was a relatively simple project - rewrite a form using Flash with modern HTML5.
      This was my first professional project, and it used a simple Linux, NodeJS, and Express stack.
      Some loading was done client-side, with JQuery and AJAX.
    </Project>
    <Project projectName="Vet500" id="vet500">The <a href="https://www.dvminsider.com/vet500/" target="_blank">Vet500</a>
      is a voting platform comparing veterinarians and animal hospitals across the country.
      By the end of voting in September 2019, it received thousands of unique votes.
      This was my first voting platform, and it required knowing Linux server management,
      NodeJS and Express web servers, Firebase, and Twilio to validate phone numbers.
    </Project>
    <Project projectName="Idaho's Best" id="idahosbest"><a href="https://www.idahosbest.com/" target="_blank">Idaho's Best</a>
      is similar to the Vet500 in how it functions, but it's targeted for
      Idaho businesses instead of nationwide veterinarians. For 2020, we received
      thousands and thousands of votes all from unique voters with verified
      phone numbers.
    </Project>
    <Project projectName="Best of SLC" id="bestofslc"><a href="https://www.bestofslc.com/" target="_blank">Best of SLC</a>
      was rebuilt from the ground up based on the design of Idaho's Best,
      but with an updated, more modular structure. It's almost exactly the
      same user interface but with revamped internals. It was even larger than
      Idaho's Best for 2020 voting, making it most widely used project to date.
    </Project>
    <Project projectName="Best of Awards" id="bestofawards">
      Best of Awards is the brand new admin user interface for creating and managing
      voting platforms like Idaho's Best and Best of SLC. Instead of using Firebase,
      this project used AWS services like DynamoDB and Lambda, meaning that I
      learned how to use those too. I wasn't alone in developing this one, and I worked
      with another senior developer to make this.
    </Project>
    <Project projectName="RevenueJump" id="revenuejump"><a href="https://www.revenuejump.com/" target="_blank">RevenueJump</a>
      helps businesses to get more 5-star reviews by sending out small surveys.
      When I started working on this, the app was fully built and functional, but
      running on <a href="https://angularjs.org/" target="_blank">AngularJS</a>,
      a framework from 2010. Currently, I'm working on a team to migrate it to
      <a href="https://vuejs.org/" target="_blank">Vue</a>.
    </Project>
    <h2>Personal Projects</h2>
    <hr class="smallhr" />
    <Project projectName="Pivot" id="pivot"><a href="https://github.com/garentyler/pivot" target="_blank">Pivot</a>
      is my toy programming language. The goal is to better understand what
      compilers do and how programming languages work, and to potentially create something useful.
    </Project>
    <Project projectName="ghOSt" id="ghost"><a href="https://github.com/garentyler/ghOSt" target="_blank">ghOSt</a>
      is my experimental operating system. I'm trying to better understand
      what operating systems do and the scale of current operating systems.
    </Project>
    <Project projectName="Composition" id="composition"><a href="https://github.com/Unary-Byte-Software/Composition" target="_blank">Composition</a>
      is a fast Minecraft server targeting version 1.8.9, and I'm also working
      on it with my friend <a href="https://khimno.com/#/" target="_blank">Danton</a>.
    </Project>
    <Project projectName="DodecaPi Software" id="dodecapi-software">The <a href="https://github.com/Unary-Byte-Software/DodecaPi-Software" target="_blank">DodecaPi Software</a>
      is a basic client-server application for factoring large numbers on
      a cluster of <a href="https://www.raspberrypi.org/" target="_blank">Raspberry Pis</a>.
      Our cluster happens to have 12 Pis, thus the name DodecaPi.
    </Project>
    <Project projectName="GlassCannon" id="dodecapi-software"><a href="https://github.com/Unary-Byte-Software/GlassCannon" target="_blank">GlassCannon</a>
      is a web server built to serve static files extremely fast from RAM. Our target
      with it is to match/beat <a href="https://www.litespeedtech.com/products/litespeed-web-server" target="_blank">LiteSpeed</a>
      in raw performance.
    </Project>
  </div>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  components: {
    Project,
  },
};
</script>

<style scoped lang="scss">
.projects {
  text-align: center;
}
</style>
