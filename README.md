# Salvage Leads

A field map of renovation, demolition and new-construction jobs in Portland, Maine, built from the city's public permit records, for finding salvageable building materials.

**Android app:** download `SalvageLeads.apk` from the [latest release](https://github.com/ronaldodaiqui/salvage-leads/releases/latest).

- Shows your location on an offline street map (US Census TIGER/Line streets and water).
- Lists spots nearest first, with walking distance.
- Tag any spot: Dumpster (seen one there), Save, Visited, Hide. Add a note.
- Add your own spots with the Add spot button or a long press on the map.
- Tags and your own spots are stored on the phone only.

The permit list lives in `data/leads.json`. The app downloads it on launch, so updating that file updates the app without a reinstall.
GitHub Actions builds the APK on every push to `main` (see `app/` and `.github/workflows/android.yml`).
`app/debug.keystore` is a throwaway debug signing key, committed so each build installs as an update over the previous one.
