"""Generate self-contained, editable editorial SVG artwork for GYRA.

The vectors are conceptual illustrations, not client photographs or portfolio cases.
No external image URLs or fonts are needed.
"""
from pathlib import Path

DEST = Path(__file__).resolve().parents[1] / 'assets' / 'illustrations'
DEST.mkdir(parents=True, exist_ok=True)

BASE = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 840" role="img" aria-label="{alt}">
<defs>
  <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#070a12"/><stop offset=".55" stop-color="#152348"/><stop offset="1" stop-color="#03040b"/></linearGradient>
  <linearGradient id="chrome" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#ffffff"/><stop offset=".13" stop-color="#64738e"/><stop offset=".25" stop-color="#dfe7ff"/><stop offset=".39" stop-color="#0f1833"/><stop offset=".56" stop-color="#71809f"/><stop offset=".74" stop-color="#f7fbff"/><stop offset=".89" stop-color="#354261"/><stop offset="1" stop-color="#dae3f1"/></linearGradient>
  <linearGradient id="electric" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7db2ff"/><stop offset=".48" stop-color="#0332fb"/><stop offset="1" stop-color="#080e47"/></linearGradient>
  <radialGradient id="glow"><stop stop-color="#104cff" stop-opacity=".64"/><stop offset="1" stop-color="#0332fb" stop-opacity="0"/></radialGradient>
  <pattern id="grid" width="53" height="53" patternUnits="userSpaceOnUse"><path d="M53 0H0V53" fill="none" stroke="#90a4d5" stroke-opacity=".11"/></pattern>
  <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="34"/></filter>
  <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency=".76" numOctaves="3" seed="8" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".10"/></feComponentTransfer></filter>
  <filter id="soft"><feGaussianBlur stdDeviation="8"/></filter>
</defs>
<rect width="1200" height="840" fill="url(#ground)"/>
<circle cx="850" cy="400" r="500" fill="url(#glow)"/>
<rect width="1200" height="840" fill="url(#grid)"/>
{content}
<rect width="1200" height="840" filter="url(#noise)" opacity=".36"/>
</svg>'''


def save(name, alt, content):
    (DEST / name).write_text(BASE.format(alt=alt.replace('"', ''), content=content), encoding='utf-8')

save('orbital-chrome.svg', 'Escultura cromada abstrata e órbita elétrica azul', '''
<ellipse cx="810" cy="445" rx="370" ry="255" fill="none" stroke="#0034ff" stroke-opacity=".4" stroke-width="65" filter="url(#shadow)" transform="rotate(-19 810 445)"/>
<path d="M444 507C421 247 722 122 856 232C1002 352 820 580 682 610C553 636 501 458 590 365C723 224 996 164 1104 343C1196 494 1025 727 821 708" fill="none" stroke="#080e33" stroke-width="126" stroke-linecap="round"/>
<path d="M444 507C421 247 722 122 856 232C1002 352 820 580 682 610C553 636 501 458 590 365C723 224 996 164 1104 343C1196 494 1025 727 821 708" fill="none" stroke="url(#chrome)" stroke-width="96" stroke-linecap="round"/>
<path d="M451 506C439 261 729 143 848 242C976 359 812 551 685 596C567 621 515 458 596 382C732 230 994 191 1090 350C1176 497 1015 698 831 688" fill="none" stroke="#fff" stroke-opacity=".32" stroke-width="9" stroke-linecap="round"/>
<ellipse cx="804" cy="445" rx="422" ry="194" transform="rotate(-19 804 445)" fill="none" stroke="#3c84ff" stroke-opacity=".76" stroke-width="4"/>
<circle cx="398" cy="558" r="15" fill="#f4ec91"/><circle cx="1092" cy="290" r="6" fill="#fff"/>
''')

save('brand-workshop.svg', 'Direção criativa com moodboard e materiais de identidade visual', '''
<g transform="rotate(-8 590 400)">
<rect x="140" y="146" width="452" height="540" rx="14" fill="#e5eaf4"/>
<rect x="175" y="181" width="382" height="474" fill="#f9fbff"/>
<rect x="202" y="208" width="202" height="130" fill="#0332fb"/>
<path d="M218 259L274 226L326 292L380 237" fill="none" stroke="#fff" stroke-width="12"/>
<text x="203" y="404" fill="#090b12" font-family="Arial,sans-serif" font-weight="800" font-size="54">GYRA.</text>
<path d="M199 449H516M199 466H463M199 483H501" stroke="#8b99b5" stroke-width="8"/>
<rect x="197" y="526" width="104" height="93" fill="#090b12"/><rect x="317" y="526" width="104" height="93" fill="#0332fb"/><rect x="438" y="526" width="83" height="93" fill="#cfd4e2"/>
</g>
<rect x="613" y="190" width="375" height="467" rx="14" fill="#0a0c16" stroke="#6880bd" stroke-opacity=".8"/>
<rect x="643" y="222" width="315" height="287" rx="5" fill="#2441a1"/>
<circle cx="801" cy="357" r="113" fill="none" stroke="url(#chrome)" stroke-width="26"/>
<circle cx="801" cy="357" r="75" fill="#0c1742"/>
<path d="M645 550H909M645 571H861M645 593H894" stroke="#64799b" stroke-width="11"/>
<rect x="988" y="151" width="119" height="100" transform="rotate(12 988 151)" fill="#f4ec91"/>
<path d="M1019 194H1076M1019 208H1061" stroke="#101522" stroke-width="7"/>
''')

save('film-production.svg', 'Equipamento de cinema e monitor de produção audiovisual', '''
<rect x="130" y="240" width="725" height="357" rx="24" fill="#0c1225" stroke="#576b95" stroke-width="9"/>
<rect x="165" y="278" width="654" height="279" rx="12" fill="#03060f"/>
<rect x="190" y="311" width="601" height="212" fill="#0730be"/>
<path d="M190 458C351 328 432 490 584 373C674 298 750 403 790 365V523H190Z" fill="#07142f"/>
<rect x="338" y="205" width="310" height="65" rx="14" fill="url(#chrome)"/>
<rect x="405" y="155" width="181" height="60" rx="10" fill="#020812" stroke="#b6c4e4" stroke-width="9"/>
<path d="M853 328L1023 231V498L853 418Z" fill="url(#chrome)"/>
<ellipse cx="1023" cy="365" rx="72" ry="143" fill="#0b1224" stroke="#b7c6dd" stroke-width="16"/>
<circle cx="1023" cy="365" r="56" fill="#1634b6"/>
<path d="M457 598L381 746M541 598L568 746M492 590V759" stroke="url(#chrome)" stroke-width="24"/>
<circle cx="211" cy="330" r="10" fill="#f4ec91"/><path d="M258 603H711" stroke="#8399bb" stroke-width="12"/>
''')

save('web-ux.svg', 'Protótipos de páginas web responsivas em um monitor', '''
<rect x="130" y="113" width="929" height="592" rx="30" fill="#090d1d" stroke="url(#chrome)" stroke-width="12"/>
<rect x="154" y="145" width="879" height="502" rx="12" fill="#0b142e"/>
<rect x="174" y="166" width="839" height="44" fill="#172b51"/>
<circle cx="199" cy="190" r="7" fill="#f4ec91"/><circle cx="226" cy="190" r="7" fill="#647dae"/><circle cx="251" cy="190" r="7" fill="#647dae"/>
<rect x="193" y="240" width="340" height="173" rx="9" fill="#0332fb"/>
<rect x="555" y="240" width="431" height="171" rx="9" fill="#1c2d57"/>
<path d="M574 287H956M574 316H839M574 344H937" stroke="#819ace" stroke-width="14"/>
<rect x="192" y="437" width="255" height="171" fill="#e8ecf5"/><rect x="467" y="437" width="255" height="171" fill="#273c70"/><rect x="743" y="437" width="243" height="171" fill="#e8ecf5"/>
<rect x="227" y="472" width="173" height="18" fill="#0332fb"/><rect x="226" y="508" width="135" height="12" fill="#7b8daf"/>
<rect x="778" y="471" width="170" height="25" fill="#0332fb"/><rect x="778" y="513" width="127" height="12" fill="#93a2bd"/>
<rect x="497" y="485" width="197" height="14" fill="#b9c8e7"/>
<path d="M450 708H728L770 744H410Z" fill="url(#chrome)"/>
''')

save('marketing-campaign.svg', 'Planejamento publicitário com cartazes e layouts de campanha', '''
<g transform="translate(98 75) rotate(-6 360 350)">
<rect x="100" y="70" width="430" height="640" fill="#eef2fa"/>
<rect x="128" y="98" width="375" height="337" fill="#0332fb"/>
<path d="M162 359L224 177L271 279L344 149L466 362Z" fill="#e8ecf5" opacity=".82"/>
<path d="M139 475H464M139 499H374M139 524H430" stroke="#090b12" stroke-width="19"/>
<rect x="139" y="579" width="170" height="55" fill="#f4ec91"/>
</g>
<g transform="translate(464 -9) rotate(8 480 410)">
<rect x="192" y="133" width="440" height="550" fill="#161e37" stroke="#9daecc" stroke-width="11"/>
<circle cx="413" cy="328" r="156" fill="#0a1532" stroke="url(#chrome)" stroke-width="27"/>
<path d="M283 553H570M283 587H485" stroke="#b8c6df" stroke-width="18"/>
</g>
<path d="M838 175L987 215L909 284" fill="none" stroke="#f4ec91" stroke-width="12"/>
''')

save('workflow.svg', 'Fluxograma digital de automações com software e conexões', '''
<rect x="124" y="128" width="950" height="577" rx="25" fill="#0a1328" stroke="url(#chrome)" stroke-width="9"/>
<rect x="152" y="158" width="896" height="54" fill="#14254b"/>
<circle cx="184" cy="185" r="9" fill="#f4ec91"/>
<path d="M244 184H597" stroke="#647da7" stroke-width="10"/>
<path d="M348 356H506V284H679M348 356H506V516H679" fill="none" stroke="#8fb3ff" stroke-width="12"/>
<path d="M853 284H948V405H679M853 516H948V405" fill="none" stroke="#8fb3ff" stroke-width="12"/>
<rect x="195" y="304" width="172" height="109" rx="18" fill="#0332fb"/><rect x="631" y="237" width="236" height="97" rx="17" fill="#223b79" stroke="#7399ee" stroke-width="4"/><rect x="631" y="467" width="236" height="97" rx="17" fill="#223b79" stroke="#7399ee" stroke-width="4"/>
<rect x="900" y="350" width="100" height="109" rx="15" fill="#eef3ff"/>
<circle cx="278" cy="355" r="25" fill="none" stroke="#fff" stroke-width="9"/>
<path d="M687 268H827M687 288H775M687 500H827M687 520H775" stroke="#c0d3fa" stroke-width="11"/>
<rect x="928" y="378" width="45" height="48" rx="6" fill="#0332fb"/>
''')

save('ai-assistant.svg', 'Interface de inteligência artificial com documentos e revisão humana', '''
<rect x="139" y="124" width="921" height="590" rx="22" fill="#101c39" stroke="#7e91b8" stroke-width="11"/>
<rect x="171" y="154" width="875" height="62" fill="#0b1326"/>
<rect x="201" y="178" width="240" height="18" rx="9" fill="#c6d4eb"/>
<rect x="201" y="251" width="365" height="166" rx="18" fill="#1f3266"/>
<path d="M226 292H527M226 325H488M226 356H516M226 388H367" stroke="#88aaff" stroke-width="13"/>
<rect x="614" y="250" width="390" height="211" rx="16" fill="#e8ecf5"/>
<path d="M649 288H946M649 316H870M649 344H931M649 374H900" stroke="#889ab8" stroke-width="15"/>
<rect x="649" y="400" width="177" height="33" rx="16" fill="#0332fb"/>
<rect x="205" y="478" width="793" height="171" rx="20" fill="#122450"/>
<circle cx="264" cy="537" r="21" fill="#f4ec91"/>
<path d="M311 521H939M311 551H890M225 595H874" stroke="#91aade" stroke-width="12"/>
''')

save('product-studio.svg', 'Fotografia conceitual de produtos e embalagens para marketing comercial', '''
<ellipse cx="615" cy="660" rx="490" ry="103" fill="#01040d" opacity=".68" filter="url(#soft)"/>
<rect x="241" y="197" width="303" height="448" rx="23" fill="url(#chrome)"/>
<rect x="271" y="229" width="245" height="389" rx="11" fill="#0b142e"/>
<rect x="304" y="331" width="178" height="148" rx="75" fill="none" stroke="#e8ecf5" stroke-width="23"/>
<path d="M326 522H466M326 545H428" stroke="#9aafd9" stroke-width="12"/>
<rect x="594" y="329" width="171" height="315" rx="18" fill="#0332fb"/>
<rect x="616" y="289" width="127" height="64" rx="12" fill="url(#chrome)"/>
<rect x="628" y="389" width="105" height="128" rx="6" fill="#dce5f5"/>
<path d="M645 441H716M645 459H702" stroke="#0332fb" stroke-width="8"/>
<rect x="809" y="215" width="177" height="427" rx="21" fill="#e8ecf5"/>
<rect x="830" y="253" width="137" height="216" fill="#0b162e"/>
<circle cx="901" cy="357" r="57" fill="#244fdd"/>
<rect x="838" y="506" width="122" height="16" fill="#41587d"/>
<rect x="838" y="544" width="99" height="14" fill="#41587d"/>
''')

save('editorial-collage.svg', 'Colagem editorial abstrata de imagens, tipografia e identidade visual', '''
<rect x="136" y="107" width="430" height="584" transform="rotate(-7 136 107)" fill="#e8ecf5"/>
<rect x="214" y="160" width="289" height="248" fill="#0332fb"/>
<path d="M237 342L319 195L376 291L442 227L487 344Z" fill="#b2d5ff"/>
<path d="M238 471H495M238 502H449M238 533H478" stroke="#14234c" stroke-width="19"/>
<rect x="584" y="207" width="435" height="449" transform="rotate(8 584 207)" fill="#111d43" stroke="#7f9bc8" stroke-width="5"/>
<path d="M659 302C833 159 1060 363 863 519C667 677 601 417 730 384" fill="none" stroke="url(#chrome)" stroke-width="78" stroke-linecap="round"/>
<rect x="832" y="118" width="208" height="102" transform="rotate(17 832 118)" fill="#f4ec91"/>
<path d="M887 159H992M887 178H954" stroke="#0a142a" stroke-width="11"/>
''')

print('Generated:', len(list(DEST.glob('*.svg'))), 'SVG assets')
