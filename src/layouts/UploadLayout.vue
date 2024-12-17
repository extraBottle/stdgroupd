<template>
    <q-layout view="hHh lpR fFf">
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer elevated class="bg-white">
        <q-toolbar>
            <q-toolbar-title class="q-my-md row justify-around">
                <q-btn class="col-5" color="grey-2" text-color="black" label="Cancel" unelevated rounded no-caps />
                <q-btn class="col-5 text-weight-bold" color="primary" label="Submit for Review" unelevated rounded no-caps />
            </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </template>