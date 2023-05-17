const producten = [
    {
        id: "ro-6610",
        name: "Rolex - Explorer 6610",
        price: 21500,
        size: 36,
        reference: 6610,
        img: "/rolex_explorer_6610/RO_6610_FullView_Front.jpg",
        description: "Deze Rolex Explorer uit 1957 heeft een van de mooiste wijzerplaten die we ooit zijn tegengekomen. De wijzerplaat is gemaakt door middel van een galvanisch coatingproces, waarbij de wijzerplaten eerst werden gestempeld met een heldere coating om de tekst- en cijferring te definiëren, waarna een zwarte substantie werd aangebracht met behulp van een chemisch bindproces."
    }, {
        id: "ro-16520",
        name: "Rolex - Daytona 16520",
        price: 73500,
        size: 40,
        reference: 16520,
        img: "/rolex_daytona_16520/RO_16520_FullView_Front.jpg",
        description: "1988 was het jaar dat Rolex voor opschudding zorgde als het om de Daytona-lijn ging. De introductie van de Daytona van de tweede generatie, met een automatisch Zenith-uurwerk, luidde een nieuw tijdperk in voor dit model."
    }, {
        id: "ro-16628",
        name: "Rolex - Yacht-Master 16628",
        price: 23000,
        size: 40,
        reference: 16628,
        img: "/rolex_yacht-master_16628/RO_16628_FullView_Front.jpg",
        description: "Geïntroduceerd in de jaren 90, is het een cross-over model tussen de gereedschapshorloges van weleer en de glimmende luxe sporthorloges die Rolex tegenwoordig produceert. Het is een dunne lijn tussen cool en opzichtig, maar Rolex heeft goud gewonnen met de Yacht-Master."
    }, {
        id: "ro-16619lv",
        name: "Rolex - Submariner 16619LV",
        price: 19500,
        size: 38,
        reference: 16619,
        img: "/rolex_submariner_16619LV/RO_16610LV_FullView_Front_Angled.jpg",
        description: "De Rolex Submariner 16619LV is een duikhorloge met een opvallende groene wijzerplaat en bezel, gemaakt van 18-karaats witgoud. Het horloge is ontworpen om bestand te zijn tegen de druk van diepzeeduiken en heeft een zelfopwindend uurwerk met functies zoals datumweergave en een draaibare lunette. De 16619LV is zeer gewild onder verzamelaars van luxe horloges vanwege zijn zeldzaamheid en uitstekende kwaliteit."
    }, {
        id: "ro-16713",
        name: "Rolex - GMT-Master 16713",
        price: 40000,
        size: 40,
        reference: 16713,
        img: "/rolex_gmt-master_16713/RO_16713_FullView_Front_Angled.jpg",
        description: "De Rolex GMT-Master 16713 is een iconisch horloge met een twee-tone stalen en 18-karaats geelgouden kast en band. Het horloge heeft een zwarte wijzerplaat met lichtgevende markeringen en een draaibare lunette met 24-uurs markeringen, waardoor het gemakkelijk is om twee verschillende tijdzones bij te houden. De 16713 heeft een automatisch uurwerk en is een favoriet onder reizigers en horlogeliefhebbers vanwege zijn functionaliteit en stijlvolle uitstraling."
    }, {
        id: "ro-1601",
        name: "Rolex - Datejust 1601",
        price: 15000,
        size: 38,
        reference: 1601,
        img: "/rolex_datejust_1601/RO_1601_CloseUp_Case.jpg",
        description: "De Rolex Datejust 1601 is een klassiek horloge met een roestvrijstalen kast en band. Het horloge heeft een zilveren wijzerplaat met datumweergave en een cyclops-lens voor vergrote zichtbaarheid. De 1601 heeft een automatisch uurwerk en is een tijdloze keuze voor zowel formele als informele gelegenheden."
    }, {
        id: "ro-118399",
        name: "Rolex - Day-Date 118399",
        price: 42000,
        size: 36,
        reference: 118399,
        img: "/rolex_day-date_118399/RO_118399_FullView_Front_Angled.jpg",
        description: "De Rolex Day-Date 118399 is een luxueus horloge gemaakt van witgoud en bezet met diamanten. Het horloge heeft een ijsblauwe wijzerplaat met dag- en datumweergave en een cyclops-lens voor vergrote zichtbaarheid. De 118399 heeft een automatisch uurwerk en is een ultiem symbool van prestige en raffinement."
    }, {
        id: "ro-18048",
        name: "Rolex - Day-Date 18048",
        price: 32000,
        size: 36,
        reference: 18048,
        img: "/rolex_day-date_18048/RO_18048_FullView_Front.jpg",
        description: "De Rolex Day-Date 18048 is een elegante en tijdloze horloge met een 18-karaats geelgouden kast en band. Het horloge heeft een champagnekleurige wijzerplaat met dag- en datumweergave en is voorzien van een cyclops-lens voor vergrote zichtbaarheid. De 18048 heeft een automatisch uurwerk en is een favoriet onder horlogeliefhebbers vanwege zijn klassieke uitstraling en vakmanschap."
    }, {
        id: "ap-14802ba",
        name: "Audemars Piguet - Royal Oak 14802BA",
        price: 120000,
        size: 42,
        reference: 14802,
        img: "/audemars_piguet_royal_oak_14802ba/AP_14802BA_FullView_FrontLeft.jpg",
        description: "De Audemars Piguet Royal Oak 14802BA is een iconisch horloge met een 18-karaats geelgouden kast en band. Het horloge heeft een blauwe wijzerplaat met de kenmerkende \"Grande Tapisserie\" guilloche-patroon en lichtgevende indexen en wijzers. De 14802BA heeft een automatisch uurwerk en is een tijdloze keuze voor liefhebbers van luxe horloges."
    }, {
        id: "ap-15202st",
        name: "Audemars Piguet - Royal Oak 15202ST",
        price: 65000,
        size: 42,
        reference: 15202,
        img: "/audemars_piguet_royal_oak_15202st/AP_15202ST_FullView_Front_Angled.jpg",
        description: "De Audemars Piguet Royal Oak 15202ST is een eerbetoon aan het oorspronkelijke ontwerp van de legendarische horlogeontwerper Gerald Genta uit 1972. Het horloge heeft een ultradunne roestvrijstalen kast en band, een blauwe \"Grande Tapisserie\" wijzerplaat en een datumweergave. De 15202ST heeft een automatisch uurwerk en is een must-have voor horlogeliefhebbers vanwege zijn historische betekenis en verfijnde esthetiek."
    }, {
        id: "ap-25930pt",
        name: "Audemars Piguet - Royal Oak 25930PT",
        price: 115000,
        size: 40,
        reference: 25930,
        img: "/audemars_piguet_royal_oak_25930pt/AP_25930PT_FullView_Front_Angled.jpg",
        description: "De Audemars Piguet Royal Oak 25930PT is een hoogwaardig horloge met een platina kast en band, bezet met baguette-geslepen diamanten op de bezel en lugs. Het horloge heeft een zilveren wijzerplaat met een kleine seconde en een datumweergave, en is voorzien van lichtgevende indexen en wijzers. De 25930PT heeft een automatisch uurwerk en is een exclusieve en luxueuze keuze voor de meest veeleisende horlogeliefhebbers."
    }, {
        id: "ap-25657ba",
        name: "Audemars Piguet - Quantième Perpetuel 25657BA",
        price: 27000,
        size: 36,
        reference: 25657,
        img: "/audemars_piguet_quantieme_perpetuel_25657ba/AP_25657BA_FullView_Front.jpg",
        description: "De Audemars Piguet Quantième Perpetuel 25657BA heeft een 18-karaats geelgouden kast en armband, en beschikt over een eeuwigdurende kalender functie met maanfase weergave. Het horloge heeft een opvallende blauwe wijzerplaat met gouden markers en wijzers, wat zorgt voor een elegant contrast."
    }, {
        id: "ap-14790ba",
        name: "Audemars Piguet - Royal Oak 14790BA",
        price: 49000,
        size: 36,
        reference: 14790,
        img: "/audemars_piguet_royal_oak_14790ba/AP_14790BA_FullView_Front.jpg",
        description: "Audemars Piguet Royal Oak 14790BA: Dit horloge is een iconisch model van de Royal Oak collectie, met een 18-karaats geelgouden kast en armband. Het horloge heeft een klassieke en tijdloze uitstraling met een zilverkleurige wijzerplaat en gouden markers en wijzers, wat zorgt voor een elegante en stijlvolle uitstraling."
    }, {
        id: "ap-257200r",
        name: "Audemars Piguet - Star Wheel 25720OR",
        price: 49000,
        size: 38,
        reference: 257200,
        img: "/audemars_piguet_star_wheel_25720or/AP_25720OR_FullView_Front.jpg",
        description: "De Audemars Piguet Star Wheel 25720OR heeft een unieke complicatie genaamd de \"star wheel\", waarbij de tijd wordt aangegeven door middel van een draaiend sterwiel. De 18-karaats roségouden kast en armband geven het horloge een luxe uitstraling, terwijl de witte wijzerplaat met roségouden markers en wijzers zorgt voor een contrast en leesbaarheid."
    }, {
        id: "ap-25548ba",
        name: "Audemars Piguet - Quantieme Perpetuel 25548BA",
        price: 32000,
        size: 36,
        reference: 25548,
        img: "/audemars_piguet_quantieme_perpetuel_25548ba/AP_25548BA_FullView_Front_Angled.jpg",
        description: "De Audemars Piguet Quantieme Perpetuel 25548BA heeft een 18-karaats geelgouden kast en armband, en beschikt over een eeuwigdurende kalender functie met maanfase weergave. De wijzerplaat is opvallend vanwege de verschillende gekleurde registers, terwijl de gouden markers en wijzers zorgen voor een klassieke uitstraling."
    }, {
        id: "pp-3712",
        name: "Patek Philippe - Nautilus 3712",
        price: 145000,
        size: 42,
        reference: 3712,
        img: "/patek_philippe_nautilus_3712/PP_3712_FullView_Front_Right.jpg",
        description: "De Patek Philippe Nautilus 3712 heeft een unieke maanfase en power reserve complicatie, met een stijlvolle en iconische ontwerp van de Nautilus collectie. De wijzerplaat heeft een opvallend blauwe kleur en het horloge heeft een roestvrijstalen kast en armband, wat zorgt voor een sportieve en toch elegante uitstraling."
    }, {
        id: "pp-3970e",
        name: "Patek Philippe - Perpetual Calendar Chronograph 3970E",
        price: 125000,
        size: 38,
        reference: 3970,
        img: "/patek_philippe_perpetual_3970e/PP_3970E_FullView_Front.jpg",
        description: "De Patek Philippe Perpetual Calendar Chronograph 3970E is een meesterwerk van complicaties, met een eeuwigdurende kalender functie en chronograaf functie in een 18-karaats geelgouden kast en armband. De zilverkleurige wijzerplaat met gouden markers en wijzers geeft het horloge een klassieke uitstraling en tijdloze elegantie."
    }, {
        id: "pp-3800/2j",
        name: "Patek Philippe - Nautilus 3800/2J",
        price: 98000,
        size: 38,
        reference: 3800,
        img: "/patek_philippe_nautilus_3800_2j/PP_3800_2J_FullView_Front.jpg",
        description: "De Patek Philippe Nautilus 3800/2J is een eerbetoon aan het iconische ontwerp van de Nautilus collectie, met een 18-karaats geelgouden kast en armband. De blauwe wijzerplaat met gouden markers en wijzers zorgt voor een elegant contrast en het horloge beschikt over een datumweergave functie."
    }, {
        id: "pp-6007a-001",
        name: "Patek Philippe - Calatrava 6007A-001",
        price: 68000,
        size: 42,
        reference: 6007,
        img: "/patek_philippe_calatrava_6007a-001/PP_6007A-001_Wearing.jpg",
        description: "De Patek Philippe Calatrava 6007A-001 is een modern en innovatief ontwerp met een opvallende saffierblauwe wijzerplaat en een roestvrijstalen kast en armband. Het horloge heeft een automatisch uurwerk en beschikt over een datumweergave en centrale seconde functie, wat zorgt voor een functionele en stijlvolle uitstraling."
    }, {
        id: "pp-3700/11j",
        name: "Patek Philippe - Nautilus 3700/11J",
        price: 135000,
        size: 40,
        reference: 3700,
        img: "/patek_philippe_nautilus_3700_11j/PP_3700_11J_Wearing.jpg",
        description: "De Patek Philippe Nautilus 3700/11J is een klassiek en iconisch model van de Nautilus collectie, met een 18-karaats geelgouden kast en armband. De wijzerplaat heeft een opvallende horizontale streepjespatroon en het horloge beschikt over een datumweergave functie, wat zorgt voor een tijdloze en elegante uitstraling."
    }, {
        id: "pp-5004p-022",
        name: "Patek Philippe - Grand Complication 5004P-022",
        price: 120000,
        size: 40,
        reference: 5004,
        img: "/patek_philippe_grand_complication_5004p-022/PP_5004P-022_Wearing.jpg",
        description: "De Patek Philippe Grand Complication 5004P-022 is een meesterwerk van complicaties, met een split-second chronograaf, eeuwigdurende kalender, maanfase weergave en minute repeater functie. Het horloge heeft een 18-karaats witgouden kast en armband, en de blauwe wijzerplaat met gouden markers en wijzers zorgen voor een klassieke en luxe uitstraling."
    }
]