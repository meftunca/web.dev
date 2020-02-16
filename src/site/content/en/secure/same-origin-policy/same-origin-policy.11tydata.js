module.exports = {
  assessment: {
    setLeader: `Use the drop-down below each cross-origin resource
      to check whether the specified action is allowed.`,
    tabLabel: "sample",
    questions: [
      {
        stimulus: `A webpage on the web.dev domain includes this iframe:

          \`\`\`html
          <iframe id="iframe" src="https://example.com/some-page.html" alt="Sample iframe"></iframe>
          \`\`\`

          The webpage's JavaScript includes this code
          to get the text content from an element in the embedded page:

          \`\`\`html
          const iframe = document.getElementById('iframe');
          const message = iframe.contentDocument.getElementById('message').innerText;
          \`\`\``,
        type: "think-and-check",
        stem: "Is this JavaScript allowed?",
        options: [
          {
            rationale: `**No**. Since the iframe is not on the same origin as the host webpage,
              the browser doesn't allow reading of the embedded page.`,
          },
        ],
      },
      {
        stimulus: `A webpage on the web.dev domain includes this form:

          \`\`\`html
          <form action="https://example.com/results.json">
            <label for="email">Enter your email: </label>
            <input type="email" name="email" id="email" required>
            <button type="submit">Subscribe</button>
          </form>
          \`\`\``,
        type: "think-and-check",
        stem: "Can this form be submitted?",
        options: [
          {
            rationale: `**Yes**. Form data can be written to a cross-origin URL specified
              in the \`action\` attribute of the \`<form>\` element.`,
          },
        ],
      },
      {
        stimulus: `A webpage on the web.dev domain includes this iframe:

          \`\`\`html
          <iframe src="https://example.com/some-page.html" alt="Sample iframe"></iframe>
          \`\`\``,
        type: "think-and-check",
        stem: "Is this iframe embed allowed?",
        options: [
          {
            rationale: `**Usually**. Cross-origin iframe embeds are allowed
              as long as the origin owner hasn't set the
              [\`X-Frame-Options\`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
              HTTP header to \`deny\` or \`sameorigin\`.`,
          },
        ],
      },
      {
        stimulus: `A webpage on the web.dev domain includes this canvas:

          \`\`\`html
          <canvas id="bargraph"></canvas>
          \`\`\`

          The webpage's JavaScript includes this code to draw an image on the canvas:

          \`\`\`js
          var context = document.getElementById('bargraph').getContext('2d');
          var img = new Image();
          img.onload = function() {
            context.drawImage(img, 0, 0);
          };
          img.src = 'https://example.com/graph-axes.svg';
          \`\`\``,
        type: "think-and-check",
        stem: "Can this image be drawn on the canvas?",
        options: [
          {
            rationale: `**It depends!** 😅 The image is on a different origin.
              If the origin's owner gave the image the appropriate
              [CORS header](/cross-origin-resource-sharing),
              the image can be safely drawn. If not, the image will
              [cause an error](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#What_is_a_.22tainted.22_canvas.3F).`,
          },
        ],
      },
    ],
  },
};