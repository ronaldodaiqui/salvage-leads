// Native plugins for the Android app, bundled into www/native.js by build-web.mjs.
import { Geolocation } from '@capacitor/geolocation';
import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';
import { AppLauncher } from '@capacitor/app-launcher';
window.Native = { Geolocation, Preferences, App, AppLauncher };
