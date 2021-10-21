import _ from 'lodash';
import Cleave from 'Cleave.js'

function component() {
    const element = document.createElement('div');

    //Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    new Cleave('.formtest',{

    });
  
    return element;
  }
  
  document.body.appendChild(component());