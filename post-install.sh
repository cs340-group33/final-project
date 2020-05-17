#!/bin/bash

rm -rf dist && \
npm install --prefix back-end && \
npm install --prefix client && \
npm run build --prefix client && \
mv client/build dist