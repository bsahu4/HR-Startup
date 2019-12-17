import React from 'react';
import { tsPropertySignature } from "@babel/types";
import Aux from '../../hoc/Aux';
import Login from '../../containers/Login';

const layout = ( props ) => (
    <Aux>
        <main>
            {props.children}
            <Login/>
        </main>
    </Aux>
);

export default layout;
