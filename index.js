const express = require('express');

const app = express();
const path = require('path');

const React = require('react');
const ReactDOM = require('react-dom/server');
let DOM = React.DOM,
  body = DOM.body,
  div = DOM.div,
  script = DOM.script;

const App = React.createFactory(require('./src/js/components/addPostItButton'));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/nodetest', express.static(path.join(__dirname, 'public/n')));

app.get('/nudd', (req, res) => {
    // var html = ReactDOM.renderToStaticMarkup(App);

    // var html = ReactDOM.renderToStaticMarkup(
    //     body(null,
    //         div(div(), div(), div())
    //     )
    // );
  const html = ReactDOM.renderToStaticMarkup(body(null,

        div({ id: 'content', dangerouslySetInnerHTML: { __html:
            ReactDOM.renderToString(App({}))
        } }),

    script({ src: '//cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js' }),
        script({ src: '//cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js' })

    ));


  res.send(html);
});

app.get('/*', (req, res) => {
  res.sendfile(path.join(__dirname, 'index.html'));
});

app.listen(8081);

console.log('listening on port 8081');
