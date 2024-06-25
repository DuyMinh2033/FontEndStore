import React from 'react'
import HeaderCommponent from '../HeaderCommponent/HeaderCommponent';

const DefaultCommponent = ({children , isShowHeader}) => {
    return (
        <div>
              {isShowHeader && <HeaderCommponent/>}
              {children}
        </div>
      );
    };


export default DefaultCommponent
