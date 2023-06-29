import "./page.scss";
import React, { useEffect, useState, useRef } from 'react';

import { Grid, Typography } from "@mui/material";

import { Order, Menu, Transform, ScrollTrigger, Morphing, Accordion } from "./components/framermotions";

export default function Animations(props) {
    return (
        <>
            <Menu />
            <Grid container direction="column">
                <Grid item container direction="row" justifyContent="space-around" alignItems="center" className="mt-3">
                    <Grid item>
                        <Order />
                    </Grid>
                    <Grid item>
                        <Transform />
                    </Grid>
                    <Grid item>
                        <Morphing />
                    </Grid>
                </Grid>
                <Grid item container direction="row" justifyContent="space-around" alignItems="center" className="mt-3">
                    <Grid item md={4}>
                        <Accordion />
                    </Grid>
                </Grid>
                <Grid item>
                    <ScrollTrigger />
                </Grid>
            </Grid>
        </>
    );
}