/**
* Copyright (c) 2021, salesforce.com, inc.
* All rights reserved.
* SPDX-License-Identifier: MIT
* For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
*/
/* LWR Error Shim v0.9.0 */
!function(){"use strict";if(!(globalThis.LWR&&globalThis.LWR.define)){const o=new Error("The LWR application failed to bootstrap");if(!globalThis.LWR||!globalThis.LWR.onError)throw o;globalThis.LWR.onError(o)}}();
