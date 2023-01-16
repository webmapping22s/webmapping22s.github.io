## Workload für die Wochen vom 19. Mai bis 2. Juni 2022

## Das AWS-Tirol Beispiel erweitern

### Layer relative Luftfeuchtigkeit

* Analog zu den bestehenden Layern soll ein weiteres Overlay für die Relative Luftfeuchtigkeit (RH) erzeugt werden. Benennt dabei das bereits bestehende Overlay `precipitation` in `humidity` mit dem Label "Relative Luftfeuchtigkeit" um, denn `precipitation` werden wir nicht mehr implementieren.

* passende Farben und Schwellen zur Erweiterung von <https://webmapping22s.github.io/aws-tirol/colors.js> um eine Farbpalette `COLORS.humidity` findet ihr bei [wetteronline.de](https://www.wetteronline.de/?gid=10093&metparaid=RH&pcid=pc_aktuell_local&pid=p_aktuell_local&sid=ColorMap), genauer gesagt in der [SVG-Grafik der Legende](https://st.wetteronline.de/mdr/p_aktuell_local/1.0.159/images/symbology/www/ic_Humidity_390x76.svg), die ihr auf der Wetterkarte rechts oben eingebettet seht.

### Das Popup der Wetterstationen erweitern 

* die Werte der bestehenden Layer anzeigen - das wären:
    * Lufttemperatur (°C)
    * Schneehöhe (cm)
    * Windgeschwindigeit (**km/h**) - nicht in **m/s** wir bei den Daten ...
    * Windrichtung (°)
    * Relative Luftfeuchtigkeit (%)
* bei den GeoJSON-Daten gibt es auch ein Attribut `plot` über das ihr einen Link auf eine Wetterverlaufsgrafik setzen könnt - die URL für den Wert `soell` lautet z.B. <https://wiski.tirol.gv.at/lawine/grafiken/1100/standard/dreitage/soell.png> ...

### Extra-Challenge

* Einbau des [Rainviewer Plugins](https://github.com/mwasil/Leaflet.Rainviewer)

Natürlich sollen alle eure Schritte wie immer einzeln `committed` werden. Wir empfehlen auch wieder die Verwendung des *Beautify*-Plugins ...

Bis spätestens **Donnerstag, 2. Juni 2022 mittags** sollen die drei Aufgaben erledigt und online sichtbar sein.
