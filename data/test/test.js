'use strict';

/*
Dilemata:
Česko - Česká republika
orientace toaletního papíru
ananas na pizze
slepice - vejce
poloprázdná - poloplná

Trilemata:
lžíce - nůž - vidlička
Harry - Ron - Hermiona
vepřo - knedlo - zelo

Škály:
vždycky/trvale - často - občas - zřídka - nikdy
souhlasím - nemám názor - nesouhlasím
více - stejně - méně
ano - nevím - ne
*/

const DATASET = {
    name:    'Testovací data',
    author:  'Josef Plch',
    version: '2022-07-22',
    respondents: [
        {name: 'Albert', colour: '#e22'}, // Vzdělaný intelektuál
        {name: 'Blanka', colour: '#0b0'}, // Naivní ekologická aktivistka
        {name: 'Ctirad', colour: '#53d'}, // Sympatizant krajní pravice
        {name: 'Dorota', colour: '#fb0'}, // Prostá dělnice
        {name: 'Edmund', colour: '#000'}
    ],
    questions: [
        {
            title:   'Ananas na pizze',
            text:    'Rozehřívací otázka: patří ananas na pizzu?',
            options: {
                type: 'scale',
                list: ['určitě ano', 'spíše ano', 'nevím', 'spíše ne', 'určitě ne']
            },
            responses: {
                'Albert': {option: 'spíše ano'},
                'Blanka': {option: 'určitě ano'},
                'Ctirad': {option: 'určitě ne', comment: 'To je ještě horší než pizza s vepřovkou!'}
            }
        },
        {
            title:   'Těžká otázka',
            text:    'Co je těžší: kilo peří, nebo kilo železa?',
            options: {
                type: 'scale',
                list: ['kilo peří', 'je to stejné', 'kilo železa']
            },
            responses: {
                'Albert': {option: 'je to stejné'},
                'Blanka': {option: 'kilo peří'},
                'Ctirad': {option: 'je to stejné'},
                'Dorota': {option: 'kilo železa', comment: 'To ví každý hlupák.'}
            }
        },
        {
            title:   'Oblíbený příbor',
			text:    'Která část příboru je Vaše nejoblíbenější?',
            details: 'Lžící můžete kdeco nabrat, ale nic s ní neukrojíte.'
					 + ' Nůž je v krájení skvělý, tím však jeho výhody končí.'
					 + ' A vidlička se hodí, pokud rádi bodáte a napichujete.',
            options: {
                type: 'independent',
                list: ['lžíce', 'nůž', 'vidlička']
            },
            responses: {
                'Albert': {comment: 'Nejradši jím hůlkami.'},
                'Blanka': {option: 'vidlička'},
                'Ctirad': {option: 'nůž'},
                'Dorota': {option: 'lžíce'}
            }
        }
        /*
        {
            title: 'Co bylo dřív',
            text:  'Byla dřív slepice, nebo vejce? Tuto slavnou filozofickou otázku si položil'
                   + ' už sám velký Aristotelés ve čtvrtém století před naším letopočtem.',
            options: {
                type: 'independent',
                list: ['slepice', 'vejce', 'obojí vzniklo současně']
            },
            responses: {
                'Blanka': {option: 'vejce'},
                'Ctirad': {option: 'slepice'},
                'Dorota': {option: 'vejce'}
            }
        }
        */
    ]
};
