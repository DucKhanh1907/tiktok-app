//Layout
import { HeaderOnly } from '~/components/Layout';

//Page
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'

import { Component } from 'react';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },

]

//Private route
const privateRoutes = [

]

export {publicRoutes, privateRoutes};