// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  // ListItem,
  // List,
  Quote,
  Slide,
  Text,
  Image,
  // Code,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import profile from '../assets/profile.jpg';
// import kat from '../assets/kat.png';
import ios from '../assets/ios.png';
import android from '../assets/android.png';
import web from '../assets/web.png';
import maps from '../assets/maps.png';
// import angry from '../assets/angry.jpg';
import textimageview from '../assets/textimageview.png';
import reactenvs from '../assets/reactenvs.png';
import importing from '../assets/importing.png';
import multipledevices from '../assets/multipledevices.png';
import webpackconfig from '../assets/webpackconfig.png';
import router from '../assets/router.png';
import platform from '../assets/platform.png';
import nativepicker from '../assets/nativepicker.png';
import webpicker from '../assets/webpicker.png';
import jumpingcat from '../assets/jumpingcat.gif';
import jest from '../assets/jest.svg';
import visi from '../assets/visi.png';
import nicolas from '../assets/nicolas.jpg';
import reacteverywhere from '../assets/reacteverywhere.png';
import lucky from '../assets/lucky.gif';
import jestconfig from '../assets/jestconfig.png';
import crazy from '../assets/crazy.gif';
import snapshotdocs from '../assets/snapshotdocs.png';
import folderstructure from '../assets/folderstructure.png';
import nativesnapshot from '../assets/nativesnapshot.png';
import websnapshot from '../assets/websnapshot.png';
import testsnapshot from '../assets/testsnapshot.png';
import caution from '../assets/caution.gif';
import fullstack from '../assets/fullstack.jpg';
import js from '../assets/js.jpg';
import repo from '../assets/repo.png';
import git from '../assets/git.png';
import twitter from '../assets/twitter.png';
import background from '../assets/background.jpg';

const reactnativeIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';

// Require CSS
require("normalize.css");
require("./styles.css");

const primary = '#fff';
const secondary = '#1F2022';
const tertiary = '#03A9FC';
const quarternary = '#CECECE';
const green = '#0f2';
const red = '#e80707';

const theme = createTheme({
  primary,
  secondary,
  tertiary,
  quarternary
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const Blue = ({ text }) => <span style={{ color: tertiary }}>{text}</span>;
const Green = ({ text }) => <span style={{ color: green }}>{text}</span>;
const Red = ({ text }) => <span style={{ color: red }}>{text}</span>;
const R = () => <Blue text="React"/>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade", "slide"]} transitionDuration={500} theme={theme} bgColor="secondary" textColor="primary">
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Building a platform agnostic app
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} >(with react native and web)</Text>
          <span style={{ fontSize: '56px' }}>📱 💻 🖥 📺</span>
          {/*<Image src={kat} />*/}
          <Text margin="10px 0 0" textColor="quarternary" textSize={22} >
            TL;DR: the code is here => <Blue text="https://github.com/VISI-ONE/rnw-starter-app" />
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <div style={{ width: '100%', minHeight: '700px', position: 'relative' }}>
            <Image src={background} style={{ display: 'inline-block', top: '15px', right: 0, position: 'absolute', zIndex: -1 }} />
            <div style={{ width: '58%', textAlign: 'left', position: 'relative', overflow: 'hidden', left: '-12px' }} className="float shadow">
              <Text margin="10px 0 0" textColor="primary" style={{ fontSize: '24px' }} >
                Name: <Blue text="Or"/> Yoffe
              </Text>
              <Text margin="10px 0 0" textColor="primary" style={{ fontSize: '24px' }} >
                Live in: <Blue text="Berlin"/>,
                Originally from Israel
              </Text>
              <Text margin="10px 0 0" textColor="primary" style={{ fontSize: '24px' }} >
                Working @ <Image src={visi} width="5%" style={{ display: 'inline-block', bottom: '-15px', position: 'relative' }} /> <Red text="VISI"/><span style={{ color: 'rgba(255, 255, 255, .3)' }}>|</span><Red text="ONE"/> we're hiring <Blue text=";)"/>
              </Text>
              <Text textColor="primary" style={{ fontSize: '24px', top: '-15px', position: 'relative' }} >
                <Image src={twitter} width="5%" style={{ display: 'inline-block', bottom: '-15px', position: 'relative' }} /> @orYoffe
              </Text>
              <Text textColor="primary" style={{ fontSize: '24px', top: '-25px', position: 'relative' }} >
                <Image src={git} width="5%" style={{ display: 'inline-block', bottom: '-15px', position: 'relative' }} /> https://github.com/orYoffe
              </Text>
            </div>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={5} fit lineHeight={1} textColor="primary">
            VISI<span style={{ color: 'rgba(255, 255, 255, .3)', top: '-1px', position: 'relative', fontWeight: 100 }}>|</span>ONE
          </Heading>
          <Image src={visi} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Cross Platform</Heading>
          <Image src={ios} width="33%" className="float" />
          <Image src={android} width="33%" className="float" />
          <Image src={web} width="33%" className="float" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={jumpingcat} width="80%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="25">Platform agnostic is a concept that refers to the design attributes and philosophies of software products. A platform agnostic product runs equally well across more than one platform.</Quote>
            <Cite>Some site online</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={multipledevices} width="80%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Platform agnostic</Heading>
          <Image src={ios} width="33%" className="float" />
          <Image src={android} width="33%" className="float" />
          <Image src={web} width="33%" className="float" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>React Native</Heading>
          <Image src={reactnativeIcon} width="50%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={reactenvs} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary"><R/> => Render (react-dom)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary"><R/> => Render (react-dom)</Text>
          <Text textColor="primary"><R/> => Render (react-native)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary"><R/> => Render (react-dom)</Text>
          <Text textColor="primary"><R/> => Render (react-native)</Text>
          <Text textColor="primary"><R/> => Render (IOS/Android/Web/TV/OS...)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Except for Maps nothing worked..</Heading>
          <Image src={maps} width="50%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={crazy} width="70%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" fit><Blue text="react-native-web" /> By Nicolas Gallagher</Heading>
          <Text textColor="primary"><Image src={twitter} style={{ display: 'inline', top: '15px', position: 'relative' }} width="5%" /> @necolas</Text>
          <Image src={nicolas} width="60%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={textimageview} width="90%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={crazy} width="70%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <div className="wrapper">
            <Image src={reacteverywhere} width="70%" />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary"><Blue text="create-react-app" /></Text>
          <Text textColor="primary">+</Text>
          <Text textColor="primary"><Blue text="create-react-native-app" /></Text>
          <Text textColor="primary">=</Text>
          <Text textColor="primary"><Blue text="re-start template" /></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={importing} width="100%" />
          <Image src={webpackconfig} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={router} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={platform} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={nativepicker} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={webpicker} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={lucky} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="quarternary" caps>Testing</Text>
          <Image src={jest} width="60%" margin="0 0 0 30%" />
          <Text textColor="primary">Jest</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">$ <Green text="jest"/> --config "<Green text="./path/to/jest/config"/>"</Text>
          <Image src={jestconfig} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">Snapshots Testing</Text>
          <Image src={snapshotdocs} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <div className="float">
            <Image src={testsnapshot} width="70%" className="float"/>
          </div>
          <div className="float">
            <Image src={websnapshot} width="50%" className="float" />
            <Image src={nativesnapshot} width="50%" />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={crazy} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">Component folder structure</Text>
          <Image src={folderstructure} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">🔥🔥🔥 A word of caution 🔥🔥🔥</Text>
          <Image src={caution} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary" style={{ top: '-21px', position: 'relative' }} ><Image src={js} width="10%" style={{ display: 'inline-block' }} /> <span style={{ fontSize: '66px', top: '-21px', position: 'relative' }}>❤️</span></Text>
          <Image src={fullstack} width="70%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary" fit><Blue text="https://github.com/VISI-ONE/rnw-starter-app" /></Text>
          <Image src={repo} width="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">Thank you :)</Text>
          <Image src={profile} width="25%" />
          <Text textColor="primary">Stay in contact</Text>
          <Text textColor="primary" style={{ fontSize: '24px', top: '-15px', position: 'relative' }} >
            <Image src={twitter} width="5%" style={{ display: 'inline-block', bottom: '-15px', position: 'relative' }} /> @orYoffe
          </Text>
          <Text textColor="primary" style={{ fontSize: '24px', top: '-25px', position: 'relative' }} >
            <Image src={git} width="5%" style={{ display: 'inline-block', bottom: '-15px', position: 'relative' }} /> https://github.com/orYoffe
          </Text>
          <Text margin="10px 0 0" textColor="primary" style={{ fontSize: '24px' }} >
            We're hiring <Blue text=";)"/> @ <Image src={visi} width="5%" style={{ display: 'inline-block', bottom: '-15px', position: 'relative' }} /> <Red text="VISI"/><span style={{ color: 'rgba(255, 255, 255, .3)' }}>|</span><Red text="ONE"/>
          </Text>
          <Text margin="10px 0 0" textColor="primary" style={{ fontSize: '24px' }} >
            http://jobs.visi-one.com
          </Text>
          <Text margin="10px 0 0" textColor="primary" style={{ fontSize: '24px' }} >
            jobs@visi-one.com
          </Text>
        </Slide>
      </Deck>
    );
  }
}
