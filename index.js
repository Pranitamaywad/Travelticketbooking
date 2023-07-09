
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));