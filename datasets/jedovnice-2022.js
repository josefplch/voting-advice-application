'use strict';

const ANO_NE_5 = ['určitě ano', 'spíše ano', 'nevím / nemám názor', 'spíše ne', 'určitě ne'];

const DATASET = {
    name:    'Jedovnice, rok 2022',
    author:  'Josef Plch ml.',
    version: '2022-09-10',
    respondents: [
        {
            name: 'Volný čas' // Leoš Blažek, Kateřina Klimešová, Libor Vymazal
        },
        {
            name: 'KDU–ČSL', // Anna Bayerová, Josef Plch, Iva Kocmanová
            colour: '#ffd719'
        },
        {
            name: 'Jedovnice 2022', // Josef Přibyl, Gustav Magula, Marek Šebela
            nonFilingStatement: [
                'Vážený pane Plchu,',
                'děkuji vám za ochotu pozměnit formulace a snad i obsah řady otázek ve vaší kalkulačce. Váš přístup je velmi pozitivní. Omlouvám se však. Při sebelepší vůli nemohu odpovídat na otázky vaší kalkulačky, a to z těchto, níže uvedených důvodů.',
                'Informoval jsem se na principy fungování volebních kalkulaček, které byly využívány občany tohoto i jiných států před volbami. Fungování těchto kalkulaček – počítačových programů vycházelo ze statistických, matematických a programátorských postupů, které vycházely ze srovnání konkrétních, platných a zveřejněných volebních programů politických stran a seskupení.',
                'V případě vašeho návrhu kalkulačky jste vycházel z vámi formulovaných pohledů na děje v obci a z vašich otázek k nim formulovaným.',
                'Podle běžných postupů v této oblasti zpracování dat musím konstatovat, že pokud vaše kalkulačka nepracuje na porovnáním přání, pocitů a názorů jednotlivých voličů s konkrétními volebními programy stran a seskupení, nemůže být objektivní. Neopírá se o prezentované cíle a názory stran a seskupení v porovnání s přáním občana a jeho volbou.',
                'Gustav Magula, Jedovnice 2022',
                '<hr>',
                '<em>'
                    + 'Komentář autora: Statistické srovnávání volebních programů je obtížné, protože se každý věnuje něčemu jinému.'
                    + ' Proto jsem postupoval stejně jako největší česká kalkulačka, <a href="https://www.volebnikalkulacka.cz/">volebnikalkulacka.cz</a>, a poslal jsem všem kandidujícím uskupením stejné otázky, na které měly odpovědět.'
                    + ' Otázky nejsou jen z mé hlavy, prostřednictvím Internetu se na nich podílela i veřejnost.'
                + '</em>',
                '<em>Musím kvitovat, že pan Magula nejprve vznesl k otázkám mnoho připomínek, z nichž jsem některé zohlednil a u jiných se doptal na podrobnosti, ale ty už jsem se bohužel nedozvěděl.</em>',
                '<em>Josef Plch ml.</em>'
            ]
        },
        {
            name: 'Budoucnost', // Jaroslav Šíbl, Jitka Teturová, Michal Prause
            nonFilingStatement: [
                'Myslíme si, že občané jsou schopni z jednotlivých volebních programů vyhodnotit priority a není nutné je srovnávat na této kalkulačce.',
                'Otázky, které jsou zde zahrnuty, ale nejsou všechny ty, které „pálí“ Jedovnice, a tudíž jsou pro občany zavádějící a některé ani nejsou správně nazvané (zpravodaj – informace).',
                'Je tam mnoho témat, která jsou řešena současným zastupitelstvem. Jiný občan = jiná volební kalkulačka.',
                'Jitka Teturová a Jaroslav Šíbl, Budoucnost',
                '<hr>',
                '<em>Komentář autora: Jistě je možné, že zde některé důležité otázky chybí, ale nic není dokonalé. Pokud naopak volič pokládá otázku za zbytečnou, může ji přeskočit, takže se nevyhodnocuje.</em>',
                '<em>Josef Plch ml.</em>'
            ]
        },
        {
            name: 'Alternativa pro Jedovnice', // Věra Přibylová, Petr Šteflíček, Miroslava Štěrbová
            colour: '#bf0202'
        },
        {
            name: 'Volba pro Jedovnice', // Marie Gabrielová, Lukáš Kocman, Hana Formánková
            nonFilingStatement: [
                'Děkujeme za nabídku zúčastnit se projektu Volební kalkulačka. Většina kandidátů, kteří se s ním seznámili, rozhodla, že se projektu nezúčastníme.',
                'Litujeme, že Vám nemůžeme dát příznivější odpověď.',
                'Marie Gabrielová, Volba pro Jedovnice'
            ]
        },
        {
            name: 'Restart', // Jarmila Stehlíková, Dominika Žáková, Irena Žižková
            colour: '#003399'
        }
    ],
    questions: [
        // Místní rozvoj a zemědělství
        // ---------------------------------------------------------------------
        {
            title:   'Nový strategický plán',
            text:    'Měl by vzniknout podrobnější strategický plán rozvoje obce?',
            details: 'Strategický plán rozvoje (SPR) vyjadřuje předpokládaný vývoj obce'
                     + ' v dlouhodobějším časovém horizontu, viz například'
                     + ' <a href="https://www.obec-brezina.cz/files/ckeditor/strategicke_dokumenty_obce/PRO_Brezina_final.pdf">'
                     + 'plán Březiny'
                     + '</a>.'
                     + ' Hlavním smyslem je sladění rozvoje v různých oblastech.'
                     // ' Plán obvykle sestavuje skupina odborníků z různých oblastí.',
                     + ' <a href="https://www.jedovnice.cz/sites/jedovnice/files/soubory/dokumenty/uvodni-strana-dokumentu/strategickyplanrozvojejedovnic.pdf">'
                         + 'Jedovnice SPR mají'
                     + '</a>,'
                     + ' vznikl roku 2021; je však dosti stručný a seznam rozvojových priorit'
                     + ' neobsahuje žádnou finanční analýzu ani časový plán.'
                     + ' Mnohé obce na druhou stranu fungují i bez strategického plánu.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Zapojení odborníků',
            text:    'Měla by obec do velkých projektů více zapojovat odborníky?',
            details: 'Současnou častou praxí při rekonstrukcích obecních budov a prostranství je,'
                     + ' že zastupitelé popíšou hrubou představu projektantovi a ten ji zpracuje.'
                     + ' Kdyby dostali více prostoru odborníci z řad architektů, urbanistů či památkářů,'
                     + ' mohlo by to přinést nové nápady, zvláště pokud by vzniklo víc konkurenčních návrhů.'
                     + ' Takový postup ovšem vyžaduje víc času i financí a podle některých zbytečně,'
                     + ' když zastupitelé coby místní dokážou řešení vymyslet sami.',
            options: {
                type: 'scale',
                list: ['ano, a mělo by vzniknout víc návrhů', 'ano, ale jeden návrh stačí', 'ne']
            },
            responses: {
                'KDU–ČSL': {option: 'ano, a mělo by vzniknout víc návrhů'},
                'Restart': {option: 'ano, a mělo by vzniknout víc návrhů'}
            }
        },
        {
            title:   'Další obecní byty',
            text:    'Měly by Jedovnice usilovat o zřízení dalších obecních bytů?',
            details: 'Obecní byty lze využít například jako sociální, startovací, či služební.'
                     + ' Vybudování i údržba něco stojí; mohou být ovšem povinnou součástí nové výstavby.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Další komerční byty',
            text:    'Měly by Jedovnice podporovat další výstavbu?',
            details: 'Výstavbu bytů může obec podpořit například změnami územního plánu'
                     + ' nebo prodejem pozemků developerům. Více obyvatel znamená'
                     + ' vyšší příjmy obecního rozpočtu, vzrůstají však také nároky'
                     + ' na občanskou vybavenost (škola, doktoři, průjezdnost komunikací).'
                     + ' Zájemci z řad místních přitom mohou být přeplaceni přespolními.',
            options: {
                type: 'scale',
                list: [
                    'ano, občanskou vybavenost lze dobudovat později',
                    'jen při současném rozvoji vybavenosti, nejlépe určeném odbornou studií',
                    'ne'
                ]
            },
            responses: {
                'KDU–ČSL': {option: 'jen při současném rozvoji vybavenosti, nejlépe určeném odbornou studií'},
                'Restart': {option: 'jen při současném rozvoji vybavenosti, nejlépe určeném odbornou studií'}
            }
        },
        {
            title:   'Průmyslová zóna',
            text:    'Měla by obec podporovat další výstavbu v průmyslové zóně?',
            details: 'Průmyslová zóna se rozléhá napravo od silnice směrem k Lažánkám'
                     + ' a spoluutváří první dojem pro příchozí od Blanska.'
                     + ' Další výstavba zde může přinést nová pracovní místa; například skladovací haly'
                     + ' jich ovšem mnoho neposkytnou a spíše zabírají ornou půdu.'
                     + ' <img src="images/jedovnice-2022/prumyslova-zona.jpg" class="mt-2 w-100">',
            options: {
                type: 'scale',
                list: ['ano', 'jen bezhlučnou a pokud přinese hodně pracovních míst', 'ne']
            },
            responses: {
                'KDU–ČSL': {option: 'jen bezhlučnou a pokud přinese hodně pracovních míst'},
                'Restart': {option: 'ne'}
            }
        },
        {
            title:   'Supermarket',
            text:    'Měly by Jedovnice na svém území umožnit výstavbu supermarketu?',
            details: 'Výstavba supermarketu by občanům přinesla větší výběr zboží a lepší ceny;'
                     + ' konkurence by ovšem zároveň mohla ekonomicky zlikvidovat stávající obchody.'
                     + ' V minulosti už vznikl záměr postavit supermarket u garáží ČAD vedle benzínky,'
                     + ' ale zastupitelstvo jej zablokovalo.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ano'},
                'Restart': {option: 'určitě ne'}
            }
        },
        {
            title:   'Nábřeží u barachovského ostrůvku',
            text:    'Co by se s tímto nábřežím mělo stát?',
            details: 'Prostor mezi barachovským parkovištěm a dětským hřištěm (směrem ke kinu)'
                     + ' dnes vyplňuje rozlehlá štěrková plocha částečně využívaná jako parkoviště.'
                     + '<img src="./images/jedovnice-2022/nabrezi.jpg" class="mt-2 w-100">',
            options: {
                type: 'independent',
                list: [
                    'vyasfaltovat a připojit k barachovskému parkovišti',
                    'vybudovat zde krytou tržnici',
                    'umožnit zde výstavbu bytových či komerčních prostor',
                    'přeměnit na park (s možnými herními/workoutovými prvky)',
                    'ponechat současný stav'
                ]
            },
            responses: {
                'KDU–ČSL': {option: 'přeměnit na park (s možnými herními/workoutovými prvky)'},
                'Restart': {option: 'přeměnit na park (s možnými herními/workoutovými prvky)'}
            }
        },
        {
            title:   'Sinice v Olšovci',
            text:    'Jak by měla obec situaci řešit?',
            details: 'Koupání v Olšovci často znepříjemňují až znemožňují sinice.'
                     + ' Svoji roli při tom hrají odpadní vody přitékající z okolních obcí.'
                     + ' Souvislost s chovem ryb není jednoznačná, některé druhy se dokonce sinicemi živí.',
            options: {
                type: 'independent',
                list: [
                    'pokusit se intenzivněji bojovat proti sinicím',
                    'vyhradit ke koupání oddělenou část Olšovce bez ryb',
                    'vybudovat veřejný bazén',
                    'ponechat současný stav'
                ]
            },
            responses: {
                'KDU–ČSL': {option: 'pokusit se intenzivněji bojovat proti sinicím'},
                'Restart': {option: 'pokusit se intenzivněji bojovat proti sinicím', comment: 'Problematika rybníka a čistoty vody je složitá a je nutné ji řešit komplexně na odborné bázi (příčina znečištění, přítoky, splach z polí, kontrola hospodaření, skladba ryb, vodní rostliny apod.).'}
            }
        },
        
        // Školství, vzdělávání a kultura
        // ---------------------------------------------------------------------
        {
            title:   'Předškolní výchova',
            text:    'Jak by měla obec řešit napjatou kapacitu MŠ?',
            details: 'Kapacita školky pro rok 2022/2023 je vyčerpána, nicméně téměř všichni zájemci byli přijati.'
                     + ' Situace do budoucna se odhaduje jen obtížně, ale pokud by v Jedovnicích došlo k větší výstavbě,'
                     + ' pravděpodobně by to znamenalo nutnost děti odmítat.'
                     + ' Další třída by mohla kapacitně ulevit stávajícím, ale na druhou stranu lze děti'
                     + ' umisťovat do školek v okolí, které volná místa mají.',
            options: {
                type: 'independent',
                list: [
                    'navýšit kapacitu mateřské školy',
                    'hledat alternativní řešení, například podporu dětských skupin',
                    'ponechat současný stav'
                ]
            },
            responses: {
                'KDU–ČSL': {option: 'navýšit kapacitu mateřské školy'},
                'Restart': {comment: 'Obec by měla navýšit kapacitu MŠ a zároveň hledat alternativní řešení (dětské skupiny), nelze upřednostnit pouze jednu odpověď, nutné jsou oba kroky.'}
            }
        },
        {
            title:   'Podpora doučování',
            text:    'Měla by obec podpořit doučování na ZŠ, například finančním příspěvkem pro zapojené učitele?',
            details: 'Mnoho dětí z různých důvodů nepochopí učivo ihned v hodině a potřebuje doučování,'
                     + ' tuto potřebu ještě navýšilo opakované omezování výuky během pandemie.'
                     + ' Nabízí se proto možnost systémově podpořit zájemce o doučování prostřednictvím základní školy;'
                     + ' proti lze argumentovat, že doučování je starostí rodičů.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ano'},
                'Restart': {option: 'spíše ne'}
            }
        },
        {
            title:   'Muzeum/galerie',
            text:    'Měla by obec zřídit muzeum a/nebo výstavní galerii?',
            details: 'Jedovnice se prezentují jako turistické centrum, nabízejí ale spíše sportovní než kulturní vyžití.'
                     + ' <a href="https://www.rudice.cz/pro-turisty/muzeum-a-tic-vetrny-mlyn">Rudice</a>'
                     + ' či <a href="https://senetarov.cz/muzeum/">Senetářov</a>'
                     + ' provozují vlastní malá muzea a Jedovnice by také jistě měly co nabídnout;'
                     + ' znamenalo by to ovšem nutnost investic do zřízení i následného provozu.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Využití kinosálu',
            text:    'Jaký by měl být další osud kinosálu?',
            details: 'S nástupem pandemie jedovnické kino přerušilo promítání a dosud jej neobnovilo,'
                     + ' návštěvnost ovšem stejně bývala nízká. Kinosál je využíván také k občasným přednáškám'
                     + ' a divadelním představením.',
            options: {
                type: 'independent',
                // Další možnost: velká digitalizace (standard DCI, teď je zřejmě DCP)
                // Viz: https://www.avmedia.cz/mam-zajem?tags[]=16
                list: ['obnovit promítání', 'přebudovat na plnohodnotný divadelní sál', 'ponechat současný stav (bez promítání)']
            },
            responses: {
                'KDU–ČSL': {option: 'ponechat současný stav (bez promítání)'},
                'Restart': {comment: 'Nelze rozhodovat pouze o osudu kinosálu odděleně - bez odborné studie na využití a rekonstrukci celého objektu kulturního domu. Obnovení promítání za aktuálního technického stavu by nebylo rentabilní.'}
            }
        },
        {
            title:   'Stánky na rybolovu',
            text:    'Jak by měla obec přistupovat ke stánkům na rybolovu?',
            details: 'Během pandemie byl tradičně vysoký počet stánků na rybolovu dramaticky omezen.'
                     + ' Část lidí to uvítala, neboť mohli nakoupit ryby bez prodírání davem.'
                     + ' Každý stánek ovšem znamená příjem do obecní kasy.'
                     + '<img src="./images/jedovnice-2022/rybolov-2019.jpg" class="mt-2 w-100">'
                     + '<div class="text-center">Typický předpandemický rybolov (2019)</div>',
            options: {
                type: 'scale',
                list: [
                     'povolit pouze ryby a základní občerstvení',
                     'zastropovat počet stánků či omezit sortiment (například na regionální výrobky)',
                     'povolit jakékoli stánky'
                ]
            },
            responses: {
                'KDU–ČSL': {option: 'zastropovat počet stánků či omezit sortiment (například na regionální výrobky)'},
                'Restart': {option: 'zastropovat počet stánků či omezit sortiment (například na regionální výrobky)'}
            }
        },
        {
            title:   'Památková ochrana',
            text:    'Měli by se zastupitelé (obecně) řídit radami památkářů, i když sami mají jiný názor?',
            details: 'Současné zastupitelstvo v posledním roce systematicky podnikalo kroky'
                     + ' ke zdemolování areálu panského dvora s argumentací, že je zchátralý a není nijak památkově chráněn.'
                     + ' <a href="http://www.plch.info/pansky-dvur-v-jedovnicich-alias-lihovar-odborna-vyjadreni">'
                        + 'Podle památkářů i dalších odborníků'
                     + '</a>'
                     + ' má navzdory tomu značnou hodnotu a bylo by proto vhodné'
                     + ' prověřit možnosti rekonstrukce a dalšího využití. Velká část zastupitelstva'
                     + ' i veřejnosti ale tuto hodnotu nevnímá či přímo zpochybňuje.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Regulace reklamy',
            text:    'Měly by Jedovnice regulovat reklamu ve veřejném prostoru?',
            details: 'Některé obce, především <a href="https://manual.brno-stred.cz/">města</a>,'
                     + ' regulují na svém území agresivní reklamu, například omezují'
                     + ' maximální velikost reklamních polepů výloh nebo zakazují blikající prvky.'
                     + ' Účelem je ochrana společného životního prostoru před'
                     + ' <a href="http://vizualnismog.info/">vizuálním smogem</a>,'
                     + ' který ničí místní atmosféru.'
                     + ' Proti regulaci lze argumentovat svobodou podnikání.'
                     + '<img src="./images/jedovnice-2022/smog-brno.jpg" class="mt-2 w-100">'
                     + '<div class="text-center">Příklad vizuálního smogu v Brně</div>',
            options: {
                type: 'scale',
                list: ['ano, všude', 'jen v centru', 'ne']
            },
            responses: {
                'KDU–ČSL': {option: 'ano, všude'},
                'Restart': {option: 'ano, všude', comment: 'Zdůrazňujeme, že regulovat ovšem neznamená kompletně zakázat, pouze vymezit pravidla (např. míra svítivosti).'}
            }
        },
        
        
        // Běžný každodenní život
        // ---------------------------------------------------------------------
        {
            title:   'Zpoplatnění parkování',
            text:    'Měly by Jedovnice zpoplatnit parkování pro návštěvníky?',
            details: 'V Jedovnicích parkuje mnoho turistů. Zpoplatnění parkování by přineslo'
                     + ' finance do obecní kasy, platby by mohly probíhat například formou SMS.'
                     + ' Regulace by nemusela zahrnovat všechny plochy a netýkala by se místních,'
                     + ' určitý čas zdarma by mohl zůstat i pro návštěvníky.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'určitě ano', comment: 'Na parkovišti u Barachova, po úpravě současného stavu parkoviště.'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Omezení parkování na náměstí',
            text:    'Měl by se na náměstí snížit počet parkovacích míst?',
            details: 'Současná úprava náměstí vychází vstříc řidičům. Snížení počtu parkovacích míst'
                     + ' by mohlo přinést víc prostoru pro chodce a zeleň, možná by ale snížilo'
                     + ' návštěvnost podniků. Turisté nicméně mohou parkovat například na Barachově'
                     + ' a majitelé domů by mohli získat vyhrazená místa.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ne'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Dětská hřiště bez dotací',
            text:    'Měla by obec začít budovat a opravovat dětská hřiště i bez dotací?',
            details: 'Na některých místech, například na Větřáku či v Chaloupkách, chybí dětská hřiště,'
                     + ' a další jsou v nevyhovujícím stavu. Oprava hřišť je součástí'
                     + ' <a href="https://www.jedovnice.cz/sites/jedovnice/files/soubory/dokumenty/uvodni-strana-dokumentu/strategickyplanrozvojejedovnic.pdf">'
                        + 'rozvojových priorit'
                     + '</a>,'
                     + ' které ale realizaci navazují na získání dotací. Pokud by obec použila vlastní peníze,'
                     + ' může začít řešit hřiště hned, neboť například loňský rozpočet'
                     + ' <a href="https://www.jedovnice.cz/sites/jedovnice/files/soubory/urednideska/2022-08/zaverecnyucet2021.pdf">'
                        + ' skončil přebytkem'
                     + '</a>'
                     + ' 16 miliónů Kč.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'určitě ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Kastrační program',
            text:    'Měly by Jedovnice zavést kastrační program?',
            details: 'Obcemi se mnohdy potulují toulavé kočky a nechtěná koťata jsou stále zabíjena.'
                     + ' Některé obce proto zavádějí <a href="https://www.obcekastruji.cz/">kastrační programy</a>,'
                     + ' v naší blízkosti například'
                     + ' <a href="https://www.vecernikpv.cz/zpravodajstvi/10337-magistrat-vyznamne-zvysil-prispevky-na-kastraci-kocek">'
                        + 'Prostějov'
                     + '</a>,'
                     + ' který na kastrace přispívá od roku 2010 (dříve 300 Kč, od letoška 1000 Kč).',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'určitě ne', comment: 'Otázku pro občany Jedovnic považujeme za bezvýznamnou.'},
                'Restart': {option: 'spíše ne'}
            }
        },
        
        // Politika a chod úřadu
        // ---------------------------------------------------------------------
        {
            title:   'Záznamy z jednání zastupitelstva',
            text:    'Měla by obec zveřejňovat zvukové či obrazové záznamy z jednání zastupitelstva?',
            details: 'Podrobný přehled o průběhu jednání patří k důležitým nástrojům veřejné kontroly.'
                     + ' Před rokem začala obec zápisy z jednání zastupitelstva'
                     + ' <a href="https://www.jedovnice.cz/zapisy-zastupitelstva">zveřejňovat na webu</a>;'
                     + ' jsou ovšem pochopitelně zestručněné, nelze z nich zjistit přesný průběh diskuzí.'
                     + ' Řešením by mohlo být zveřejňování zvukových či obrazových záznamů,'
                     + ' jako to <a href="https://www.blansko.cz/sprava-mesta/zastupitelstvo/zaznamy">činí jiné obce</a>,'
                     + ' zvláště při existenci'
                     + ' <a href="https://www.jedovnice.cz/cs/informacni-media/videozurnal-line">Infokanálu</a>.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Jmenné hlasování',
            text:    'Mělo by se zveřejňovat, jak hlasovali jednotliví zastupitelé?',
            details: 'V současnosti se občané mohou zpětně dozvědět poměr hlasů, jakým byly jednotlivé'
                     + ' návrhy usnesení na zasedání přijaty či zamítnuty (tato informace je součástí '
                     + ' <a href="https://www.jedovnice.cz/zapisy-zastupitelstva">'
                        + 'zápisů'
                     + '</a>).'
                     + ' Nelze ale zpětně zjistit, jak kdo hlasoval.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Omezení pracovních jednání',
            text:    'Měly by se diskuze na pracovních jednáních zastupitelstva omezit ve prospěch veřejných zasedání?',
            details: 'Současné zastupitelstvo velkou část agendy předjednává na svých tzv. pracovních jednáních,'
                     + ' která jsou neveřejná. Oficiální zasedání jsou díky tomu kratší, avšak'
                     + ' <a href="https://www.mvcr.cz/clanek/zasada-verejnosti-zasedani-zastupitelstva-obce-prakticke-problemy.aspx">'
                     + 'dle vyjádření Ministerstva vnitra'
                     + '</a>'
                     + ' může jít o obcházení smyslu veřejnosti zasedání, neboť občané mají mít možnost být přítomni'
                     + ' nejen hlasování, ale i rozpravě.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'určitě ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Participativní rozpočet',
            text:    'Měla by obec (znovu) zavést participativní rozpočet?',
            details: 'Podstatou participativního rozpočtu je, že o využití části obecních prostředků'
                     + ' hlasují občané, kteří mohou vybírat mezi několika připravenými projekty,'
                     + ' případně mohou projekty i navrhovat. Tento model už v minulosti v Jedovnicích fungoval,'
                     + ' zapojení občanů však bylo nevelké.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'určitě ano'},
                'Restart': {option: 'určitě ano'}
            }
        },
        {
            title:   'Občané ve zpravodaji',
            text:    'Měli by mít řadoví občané právo opět přispívat do zpravodaje?',
            details: 'Dříve mohli do zpravodaje (dnes oficiálně Informace z Jedovnic) přispívat při dodržení'
                     + ' <a href="https://web.archive.org/web/20190513124851/http://jedovnice.cz/sites/jedovnice/files/soubory/dokumenty/jedovnicky-zpravodaj/zasady-pro-vydavani-jedovnickeho-zpravodaje-2017.pdf">'
                        + 'redakčních zásad'
                     + '</a>'
                     + ' i řadoví občané. Současné zastupitelstvo roku 2019 zásady zrušilo, stejně jako redakční radu,'
                     + ' a povolilo přispívat toliko spolkům a organizacím, a to pouze '
                     + ' <a href="https://www.jedovnice.cz/cs/informacni-media/dvoumesicnik-informace-z-jedovnic-v-pdf-tiskovina">'
                        + '„podnětně a neútočně“'
                     + '</a>.',
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'určitě ano', comment: 'I kriticky, ale neútočně.'},
                'Restart': {option: 'určitě ano', comment: 'Možnost, aby jednotliví občané mohli vyjádřit svůj názor, i kriticky, považujeme za zásadní.'}
            }
        },
        {
            title:   'Status města',
            text:    'Měly by se Jedovnice usilovat o získání statusu města?',
            details: 'Jedovnice se blíží hranici tří tisíc obyvatel, od které je možné žádat o udělení statusu města.'
                     + ' Jedná se pouze o prestižní záležitost bez významnějších praktických dopadů.',
                     /*
                      * Požadavky: https://moderniobec.cz/stanoveni-obce-mestem/ (2011)
                      * Nová města (viz Seznam bývalých měst v Česku):
                      * 2015 Bělčice, okres Strakonice
                      * 2019 Lipnice nad Sázavou, okres Havlíčkův Brod
                      * 2022 Miličín, okres Benešov
                      */
            options: {
                type: 'scale',
                list: ANO_NE_5
            },
            responses: {
                'KDU–ČSL': {option: 'spíše ne'},
                'Restart': {option: 'určitě ne'}
            }
        }
    ]
};
