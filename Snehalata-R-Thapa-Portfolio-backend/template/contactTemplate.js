// Email template for contact

const createContactEmailTemplate = (email, fullName, message) => {
  return `
 <div style="font-family:monospace;">

<h2 style="background: linear-gradient(to right,whitesmoke,royalblue ); color:white; text-align:center; font-size:24px; padding:5px;">
    Hello, Snehalata
</h2>

<div>

<p style="margin:5px 0px; font-size:12px;"># Recived from: ${email}
</p>



<div style="border:2px dashed black; padding:5px; display: table; width: 100%;">
  <p style="padding:0px; margin:0px; font-size:14px;">${message}</p>
  <p style="display: table-footer-group; text-align: right; margin: 0; padding: 5px; font-size:14px;">By ${fullName}</p>
</div>

  <div>
  <p>This Message is sent from:</p>
  <a href="https://snehalatarthapa.com/">SNEHALATA R THAPA</a>
</div>

</div>


  `;
};

module.exports = createContactEmailTemplate;