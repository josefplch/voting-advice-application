<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="UTF-8">
        <title>Volební kalkulačka</title>
        <link rel="icon" href="../../favicon.png">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <style>
            @page
            {
                size: A4 portrait;
            }
            
            @media print
            {
                *
                {
                    color-adjust: exact !important;
                    -webkit-print-color-adjust: exact !important;
                }
                
                a
                {
					/*
                    color: inherit;
                    text-decoration: none;
					*/
                }
                
                header, .question
                {
                    page-break-after: always;
                    page-break-inside: avoid;
                }
                
                #title
                {
                    margin-bottom: 20mm;
                    margin-top: 25mm;
                }
                
                .d-print-none
                {
                    display: none;
                }
                
                /* Override the Bootstrap white background. */
                .table td,
                .table th
                {
                    background-color: inherit !important;
                }
            }
            
            @media screen
            {
                body
                {
                    background-color: #6c757d;
                    padding: 1rem;
                }
                
                #page
                {
                    background-color: #fff;
                    border-radius: 0.5rem;
                    padding: 2rem;
                    margin: 0 auto;
                    max-width: 50rem;
                }
                
                #title
                {
                    margin-top: 1rem;
                }
                
                .question
                {
                    margin-top: 3rem;
                }
            }
            
            table, tr, td, th
            {
                border: 1px solid #ccc;
            }
            
            .chart
            {
                height: 25rem;
                /* overflow: clip; */
                width: 100%;
            }
            
            .w-count
            {
                width: 5rem;
            }
        </style>
    </head>
    <body>
<?php
function indentation ($n)
{
    $result = '';
    for ($i = 0; $i < $n; $i++)
    {
        $result .= '    ';
    }
    return $result;
}
    
$handle = fopen ('./responses-unique.log', 'r');
if ($handle)
{
    $COLOR_BLUE   = '#25e';
    $COLOR_BROWN  = '#b84';
    $COLOR_GREEN  = '#1a3'; // Old: 2a2
    $COLOR_GREY   = '#777';
    $COLOR_LILAC  = '#b8c';
    $COLOR_LIME   = '#bb1'; // Old: 9c2
    $COLOR_ORANGE = '#fa7711'; // Old: f60    
    $COLOR_RED    = '#e23';
    $COLOR_YELLOW = '#f7b700'; // Old: eb0
    $COLOR_X      = '#bbb';
    
    $ANO_NE_5 = [
        'type' => 'scale',
        'list' => [
            '1' => ['count' => 0, 'color' => $COLOR_GREEN,  'text' => 'určitě ano'],
            '2' => ['count' => 0, 'color' => $COLOR_LIME,   'text' => 'spíše ano'],
            '3' => ['count' => 0, 'color' => $COLOR_YELLOW, 'text' => 'nevím / nemám názor'],
            '4' => ['count' => 0, 'color' => $COLOR_ORANGE, 'text' => 'spíše ne'],
            '5' => ['count' => 0, 'color' => $COLOR_RED,    'text' => 'určitě ne'],
            'x' => ['count' => 0, 'color' => $COLOR_X,      'text' => 'bez odpovědi']
        ]
    ];
    
    $questions = [
        [
            'title'   => 'Nový strategický plán',
            'text'    => 'Měl by vzniknout podrobnější strategický plán rozvoje obce?',
            'details' => 'Strategický plán rozvoje (SPR) vyjadřuje předpokládaný vývoj obce'
                         .' v dlouhodobějším časovém horizontu, viz například'
                         .' <a href="https://www.obec-brezina.cz/files/ckeditor/strategicke_dokumenty_obce/PRO_Brezina_final.pdf">'
                         .'plán Březiny'
                         .'</a>.'
                         .' Hlavním smyslem je sladění rozvoje v různých oblastech.'
                         // ' Plán obvykle sestavuje skupina odborníků z různých oblastí.',
                         .' <a href="https://www.jedovnice.cz/sites/jedovnice/files/soubory/dokumenty/uvodni-strana-dokumentu/strategickyplanrozvojejedovnic.pdf">'
                             .'Jedovnice SPR mají'
                         .'</a>,'
                         .' vznikl roku 2021; je však dosti stručný a seznam rozvojových priorit'
                         .' neobsahuje žádnou finanční analýzu ani časový plán.'
                         .' Mnohé obce na druhou stranu fungují i bez strategického plánu.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Zapojení odborníků',
            'text'    => 'Měla by obec do velkých projektů více zapojovat odborníky?',
            'details' => 'Současnou častou praxí při rekonstrukcích obecních budov a prostranství je,'
                         .' že zastupitelé popíšou hrubou představu projektantovi a ten ji zpracuje.'
                         .' Kdyby dostali více prostoru odborníci z&nbsp;řad architektů, urbanistů či památkářů,'
                         .' mohlo by to přinést nové nápady, zvláště pokud by vzniklo víc konkurenčních návrhů.'
                         .' Takový postup ovšem vyžaduje víc času i financí a podle některých zbytečně,'
                         .' když zastupitelé coby místní dokážou řešení vymyslet sami.',
            'options' => [
                'type' => 'scale',
                'list' => [
                    '1' => ['count' => 0, 'color' => $COLOR_GREEN,  'text' => 'ano, a mělo by vzniknout víc návrhů'],
                    '2' => ['count' => 0, 'color' => $COLOR_YELLOW, 'text' => 'ano, ale jeden návrh stačí'],
                    '3' => ['count' => 0, 'color' => $COLOR_RED,    'text' => 'ne'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,      'text' => 'bez odpovědi']
                ]
            ]
        ],
        [
            'title'   => 'Další obecní byty',
            'text'    => 'Měly by Jedovnice usilovat o zřízení dalších obecních bytů?',
            'details' => 'Obecní byty lze využít například jako sociální, startovací, či služební.'
                         .' Vybudování i údržba něco stojí; mohou být ovšem povinnou součástí nové výstavby.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Další komerční byty',
            'text'    => 'Měly by Jedovnice podporovat další výstavbu?',
            'details' => 'Výstavbu bytů může obec podpořit například změnami územního plánu'
                         .' nebo prodejem pozemků developerům. Více obyvatel znamená'
                         .' vyšší příjmy obecního rozpočtu, vzrůstají však také nároky'
                         .' na&nbsp;občanskou vybavenost (škola, doktoři, průjezdnost komunikací).'
                         .' Zájemci z řad místních přitom mohou být přeplaceni přespolními.',
            'options' => [
                'type' => 'scale',
                'list' => [
                    '1' => ['count' => 0, 'color' => $COLOR_GREEN,  'text' => 'ano, občanskou vybavenost lze dobudovat později'],
                    '2' => ['count' => 0, 'color' => $COLOR_YELLOW, 'text' => 'jen při současném rozvoji vybavenosti, nejlépe určeném odbornou studií'],
                    '3' => ['count' => 0, 'color' => $COLOR_RED,    'text' => 'ne'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,      'text' => 'bez odpovědi']
                ]
            ]
        ],
        [
            'title'   => 'Průmyslová zóna',
            'text'    => 'Měla by obec podporovat další výstavbu v průmyslové zóně?',
            'details' => 'Průmyslová zóna se rozléhá napravo od silnice směrem k Lažánkám'
                         .' a spoluutváří první dojem pro&nbsp;příchozí od Blanska.'
                         .' Další výstavba zde může přinést nová pracovní místa; například skladovací haly'
                         .' jich ovšem mnoho neposkytnou a spíše zabírají ornou půdu.'
                         .' <img src="./images/prumyslova-zona.jpg" class="mt-2 w-100">',
            'options' => [
                'type' => 'scale',
                'list' => [
                    '1' => ['count' => 0, 'color' => $COLOR_GREEN,  'text' => 'ano'],
                    '2' => ['count' => 0, 'color' => $COLOR_YELLOW, 'text' => 'jen bezhlučnou a pokud přinese hodně pracovních míst'],
                    '3' => ['count' => 0, 'color' => $COLOR_RED,    'text' => 'ne'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,      'text' => 'bez odpovědi']
                ]
            ]
        ],
        [
            'title'   => 'Supermarket',
            'text'    => 'Měly by Jedovnice na svém území umožnit výstavbu supermarketu?',
            'details' => 'Výstavba supermarketu by občanům přinesla větší výběr zboží a lepší ceny;'
                         .' konkurence by ovšem zároveň mohla ekonomicky zlikvidovat stávající obchody.'
                         .' V minulosti už vznikl záměr postavit supermarket u garáží ČAD vedle benzínky,'
                         .' ale zastupitelstvo jej zablokovalo.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Nábřeží u barachovského ostrůvku',
            'text'    => 'Co by se s tímto nábřežím mělo stát?',
            'details' => 'Prostor mezi barachovským parkovištěm a dětským hřištěm (směrem ke kinu)'
                         .' dnes vyplňuje rozlehlá štěrková plocha částečně využívaná jako parkoviště.'
                         .'<img src="./images/jedovnice-2022/nabrezi.jpg" class="mt-2 w-100">',
            'options' => [
                'type' => 'independent',
                'list' => [
                    '4' => ['count' => 0, 'color' => $COLOR_GREEN,  'text' => 'přeměnit na park (s možnými herními/workoutovými prvky)'],
                    '1' => ['count' => 0, 'color' => $COLOR_GREY,   'text' => 'vyasfaltovat a připojit k barachovskému parkovišti'],
                    '2' => ['count' => 0, 'color' => $COLOR_RED,    'text' => 'vybudovat zde krytou tržnici'],
                    '5' => ['count' => 0, 'color' => $COLOR_BROWN,  'text' => 'ponechat současný stav'],
                    '3' => ['count' => 0, 'color' => $COLOR_BLUE,   'text' => 'umožnit zde výstavbu bytových či komerčních prostor'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,      'text' => 'bez odpovědi']
                ]
            ]
        ],
        [
            'title'   => 'Sinice v Olšovci',
            'text'    => 'Jak by měla obec situaci řešit?',
            'details' => 'Koupání v Olšovci často znepříjemňují až znemožňují sinice.'
                         .' Svoji roli při tom hrají odpadní vody přitékající z okolních obcí.'
                         .' Souvislost s chovem ryb není jednoznačná, některé druhy se dokonce sinicemi živí.',
            'options' => [
                'type' => 'independent',
                'list' => [
                    '1' => ['count' => 0, 'color' => $COLOR_GREEN, 'text' => 'pokusit se intenzivněji bojovat proti sinicím'],
                    '3' => ['count' => 0, 'color' => $COLOR_BLUE,  'text' => 'vybudovat veřejný bazén'],
                    '4' => ['count' => 0, 'color' => $COLOR_BROWN, 'text' => 'ponechat současný stav'],
                    '2' => ['count' => 0, 'color' => $COLOR_RED,   'text' => 'vyhradit ke koupání oddělenou část Olšovce bez ryb'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,     'text' => 'bez odpovědi']
                ]
            ]
        ],
        [
            'title'   => 'Předškolní výchova',
            'text'    => 'Jak by měla obec řešit napjatou kapacitu MŠ?',
            'details' => 'Kapacita školky pro rok 2022/2023 je vyčerpána, nicméně téměř všichni zájemci byli přijati.'
                         .' Situace do&nbsp;budoucna se odhaduje jen obtížně, ale pokud by v Jedovnicích došlo k větší výstavbě,'
                         .' pravděpodobně by to znamenalo nutnost děti odmítat.'
                         .' Další třída by mohla kapacitně ulevit stávajícím, ale na druhou stranu lze děti'
                         .' umisťovat do školek v okolí, které volná místa mají.',
            'options' => [
                'type' => 'independent',
                'list' => [
                    '1' => ['count' => 0, 'color' => $COLOR_YELLOW, 'text' => 'navýšit kapacitu mateřské školy'],
                    '2' => ['count' => 0, 'color' => $COLOR_BLUE,   'text' => 'hledat alternativní řešení, například podporu dětských skupin'],
                    '3' => ['count' => 0, 'color' => $COLOR_BROWN,  'text' => 'ponechat současný stav'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,      'text' => 'bez odpovědi']
                ]
            ]
        ],
        [
            'title'   => 'Podpora doučování',
            'text'    => 'Měla by obec podpořit doučování na ZŠ, například finančním příspěvkem pro zapojené učitele?',
            'details' => 'Mnoho dětí z různých důvodů nepochopí učivo ihned v hodině a potřebuje doučování,'
                         .' tuto potřebu ještě navýšilo opakované omezování výuky během pandemie.'
                         .' Nabízí se proto možnost systémově podpořit zájemce o doučování prostřednictvím základní školy;'
                         .' proti lze argumentovat, že doučování je starostí rodičů.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Muzeum/galerie',
            'text'    => 'Měla by obec zřídit muzeum a/nebo výstavní galerii?',
            'details' => 'Jedovnice se prezentují jako turistické centrum, nabízejí ale spíše sportovní než kulturní vyžití.'
                         .' <a href="https://www.rudice.cz/pro-turisty/muzeum-a-tic-vetrny-mlyn">Rudice</a>'
                         .' či <a href="https://senetarov.cz/muzeum/">Senetářov</a>'
                         .' provozují vlastní malá muzea a Jedovnice by také jistě měly co nabídnout;'
                         .' znamenalo by to ovšem nutnost investic do zřízení i následného provozu.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Využití kinosálu',
            'text'    => 'Jaký by měl být další osud kinosálu?',
            'details' => 'S nástupem pandemie jedovnické kino přerušilo promítání a dosud jej neobnovilo,'
                         .' návštěvnost ovšem stejně bývala nízká. Kinosál je využíván také k občasným přednáškám'
                         .' a divadelním představením.',
            'options' => [
                'type' => 'independent',
                'list' => [
                    '1' => ['count' => 0, 'color' => $COLOR_BLUE,  'text' => 'obnovit promítání'],
                    '2' => ['count' => 0, 'color' => $COLOR_RED,   'text' => 'přebudovat na plnohodnotný divadelní sál'],
                    '3' => ['count' => 0, 'color' => $COLOR_BROWN, 'text' => 'ponechat současný stav (bez promítání)'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,     'text' => 'bez odpovědi']
                ]
            ]
        ],
        [
            'title'   => 'Stánky na rybolovu',
            'text'    => 'Jak by měla obec přistupovat ke stánkům na rybolovu?',
            'details' => 'Během pandemie byl tradičně vysoký počet stánků na rybolovu dramaticky omezen.'
                         .' Část lidí to uvítala, neboť mohli nakoupit ryby bez prodírání davem.'
                         .' Každý stánek ovšem znamená příjem do&nbsp;obecní kasy.'
                         .'<img src="./images/jedovnice-2022/rybolov-2019.jpg" class="mt-2 w-100">'
                         .'<div class="text-center">Typický předpandemický rybolov (2019)</div>',
            'options' => [
                'type' => 'scale',
                'list' => [
                    '3' => ['count' => 0, 'color' => $COLOR_GREEN,  'text' => 'povolit jakékoli stánky'],
                    '2' => ['count' => 0, 'color' => $COLOR_YELLOW, 'text' => 'zastropovat počet stánků či omezit sortiment (například na regionální výrobky)'],
                    '1' => ['count' => 0, 'color' => $COLOR_RED,    'text' => 'povolit pouze ryby a základní občerstvení'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,      'text' => 'bez odpovědi']
                ]
            ]
        ],
        [
            'title'   => 'Památková ochrana',
            'text'    => 'Měli by se zastupitelé (obecně) řídit radami památkářů, i když sami mají jiný názor?',
            'details' => 'Současné zastupitelstvo v posledním roce systematicky podnikalo kroky'
                         .' ke zdemolování areálu panského dvora s argumentací, že je zchátralý a není nijak památkově chráněn.'
                         .' <a href="http://www.plch.info/pansky-dvur-v-jedovnicich-alias-lihovar-odborna-vyjadreni">'
                             .'Podle památkářů i&nbsp;dalších odborníků'
                         .'</a>'
                         .' má navzdory tomu značnou hodnotu a bylo by proto vhodné'
                         .' prověřit možnosti rekonstrukce a dalšího využití. Velká část zastupitelstva'
                         .' i veřejnosti ale tuto hodnotu nevnímá či přímo zpochybňuje.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Regulace reklamy',
            'text'    => 'Měly by Jedovnice regulovat reklamu ve veřejném prostoru?',
            'details' => 'Některé obce, především <a href="https://manual.brno-stred.cz/">města</a>,'
                         .' regulují na svém území agresivní reklamu, například omezují'
                         .' maximální velikost reklamních polepů výloh nebo zakazují blikající prvky.'
                         .' Účelem je ochrana společného životního prostoru před'
                         .' <a href="http://vizualnismog.info/">vizuálním smogem</a>,'
                         .' který ničí místní atmosféru.'
                         .' Proti regulaci lze argumentovat svobodou podnikání.'
                         .'<img src="./images/jedovnice-2022/smog-brno.jpg" class="mt-2 w-100">'
                         .'<div class="text-center">Příklad vizuálního smogu v Brně</div>',
            'options' => [
                'type' => 'scale',
                'list' => [
                    '1' => ['count' => 0, 'color' => $COLOR_GREEN,  'text' => 'ano, všude'],
                    '2' => ['count' => 0, 'color' => $COLOR_YELLOW, 'text' => 'jen v centru'],
                    '3' => ['count' => 0, 'color' => $COLOR_RED,    'text' => 'ne'],
                    'x' => ['count' => 0, 'color' => $COLOR_X,      'text' => 'bez odpovědi']
                ]
            ],
        ],
        [
            'title'   => 'Zpoplatnění parkování',
            'text'    => 'Měly by Jedovnice zpoplatnit parkování pro návštěvníky?',
            'details' => 'V Jedovnicích parkuje mnoho turistů. Zpoplatnění parkování by přineslo'
                         .' finance do obecní kasy, platby by mohly probíhat například formou SMS.'
                         .' Regulace by nemusela zahrnovat všechny plochy a netýkala by se místních,'
                         .' určitý čas zdarma by mohl zůstat i pro návštěvníky.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Omezení parkování na náměstí',
            'text'    => 'Měl by se na náměstí snížit počet parkovacích míst?',
            'details' => 'Současná úprava náměstí vychází vstříc řidičům. Snížení počtu parkovacích míst'
                         .' by mohlo přinést víc prostoru pro chodce a zeleň, možná by ale snížilo'
                         .' návštěvnost podniků. Turisté nicméně mohou parkovat například na Barachově'
                         .' a majitelé domů by mohli získat vyhrazená místa.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Dětská hřiště bez dotací',
            'text'    => 'Měla by obec začít budovat a opravovat dětská hřiště i bez dotací?',
            'details' => 'Na některých místech, například na Větřáku či v Chaloupkách, chybí dětská hřiště,'
                         .' a další jsou v&nbsp;nevyhovujícím stavu. Oprava hřišť je součástí'
                         .' <a href="https://www.jedovnice.cz/sites/jedovnice/files/soubory/dokumenty/uvodni-strana-dokumentu/strategickyplanrozvojejedovnic.pdf">'
                             .'rozvojových priorit'
                         .'</a>,'
                         .' které ale realizaci navazují na získání dotací. Pokud by obec použila vlastní peníze,'
                         .' může začít řešit hřiště hned, neboť například loňský rozpočet'
                         .' <a href="https://www.jedovnice.cz/sites/jedovnice/files/soubory/urednideska/2022-08/zaverecnyucet2021.pdf">'
                             .' skončil přebytkem'
                         .'</a>'
                         .' 16 miliónů Kč.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Kastrační program',
            'text'    => 'Měly by Jedovnice zavést kastrační program?',
            'details' => 'Obcemi se mnohdy potulují toulavé kočky a nechtěná koťata jsou stále zabíjena.'
                         .' Některé obce proto zavádějí <a href="https://www.obcekastruji.cz/">kastrační programy</a>,'
                         .' v naší blízkosti například'
                         .' <a href="https://www.vecernikpv.cz/zpravodajstvi/10337-magistrat-vyznamne-zvysil-prispevky-na-kastraci-kocek">'
                             .'Prostějov'
                         .'</a>,'
                         .' který na kastrace přispívá od roku 2010 (dříve 300 Kč, od letoška 1000 Kč).',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Záznamy z jednání zastupitelstva',
            'text'    => 'Měla by obec zveřejňovat zvukové či obrazové záznamy z jednání zastupitelstva?',
            'details' => 'Podrobný přehled o průběhu jednání patří k důležitým nástrojům veřejné kontroly.'
                         .' Před rokem začala obec zápisy z jednání zastupitelstva'
                         .' <a href="https://www.jedovnice.cz/zapisy-zastupitelstva">zveřejňovat na webu</a>;'
                         .' jsou ovšem pochopitelně zestručněné, nelze z&nbsp;nich zjistit přesný průběh diskuzí.'
                         .' Řešením by mohlo být zveřejňování zvukových či obrazových záznamů,'
                         .' jako to <a href="https://www.blansko.cz/sprava-mesta/zastupitelstvo/zaznamy">činí jiné obce</a>,'
                         .' zvláště při existenci'
                         .' <a href="https://www.jedovnice.cz/cs/informacni-media/videozurnal-line">Infokanálu</a>.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Jmenné hlasování',
            'text'    => 'Mělo by se zveřejňovat, jak hlasovali jednotliví zastupitelé?',
            'details' => 'V současnosti se občané mohou zpětně dozvědět poměr hlasů, jakým byly jednotlivé'
                         .' návrhy usnesení na zasedání přijaty či zamítnuty (tato informace je součástí '
                         .' <a href="https://www.jedovnice.cz/zapisy-zastupitelstva">'
                             .'zápisů'
                         .'</a>).'
                         .' Nelze ale zpětně zjistit, jak kdo hlasoval.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Omezení pracovních jednání',
            'text'    => 'Měly by se diskuze na pracovních jednáních zastupitelstva omezit ve prospěch veřejných zasedání?',
            'details' => 'Současné zastupitelstvo velkou část agendy předjednává na svých tzv. pracovních jednáních,'
                         .' která jsou neveřejná. Oficiální zasedání jsou díky tomu kratší, avšak'
                         .' <a href="https://www.mvcr.cz/clanek/zasada-verejnosti-zasedani-zastupitelstva-obce-prakticke-problemy.aspx">'
                             .'dle vyjádření Ministerstva vnitra'
                         .'</a>'
                         .' může jít o&nbsp;obcházení smyslu veřejnosti zasedání, neboť občané mají mít možnost být přítomni'
                         .' nejen hlasování, ale i rozpravě.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Participativní rozpočet',
            'text'    => 'Měla by obec (znovu) zavést participativní rozpočet?',
            'details' => 'Podstatou participativního rozpočtu je, že o využití části obecních prostředků'
                         .' hlasují občané, kteří mohou vybírat mezi několika připravenými projekty,'
                         .' případně mohou projekty i navrhovat. Tento model už v minulosti v Jedovnicích fungoval,'
                         .' zapojení občanů však bylo nevelké.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Občané ve zpravodaji',
            'text'    => 'Měli by mít řadoví občané právo opět přispívat do zpravodaje?',
            'details' => 'Dříve mohli do zpravodaje (dnes oficiálně Informace z Jedovnic) přispívat při dodržení'
                         .' <a href="https://web.archive.org/web/20190513124851/http://jedovnice.cz/sites/jedovnice/files/soubory/dokumenty/jedovnicky-zpravodaj/zasady-pro-vydavani-jedovnickeho-zpravodaje-2017.pdf">'
                             .'redakčních zásad'
                         .'</a>'
                         .' i řadoví občané. Současné zastupitelstvo roku 2019 zásady zrušilo, stejně jako redakční radu,'
                         .' a povolilo přispívat toliko spolkům a organizacím, a to pouze '
                         .' <a href="https://www.jedovnice.cz/cs/informacni-media/dvoumesicnik-informace-z-jedovnic-v-pdf-tiskovina">'
                             .'„podnětně a neútočně“'
                         .'</a>.',
            'options' => $ANO_NE_5
        ],
        [
            'title'   => 'Status města',
            'text'    => 'Měly by Jedovnice usilovat o získání statusu města?',
            'details' => 'Jedovnice se blíží hranici tří tisíc obyvatel, od které je možné žádat o udělení statusu města.'
                         .' Jedná se pouze o prestižní záležitost bez významnějších praktických dopadů.',
            'options' => $ANO_NE_5
        ]
    ];
    
    $uniqueResponses = [];
    while (($line = fgets ($handle)) !== false)
    {
        $columns = explode ('  ', $line);
        if (count ($columns) >= 4 && strpos ($line, 'xxxxxxxxxx') === false)
        {
            $importance = trim ($columns [2]);
            $options    = trim ($columns [3]);
            $uniqueResponses [$options] = $importance;
        }
    }
    fclose ($handle);
    
    foreach ($uniqueResponses as $options => $importance)
    {
        // echo ('Response options: '.$options.'<br>'.PHP_EOL);
        for ($i = 0; $i < strlen ($options); $i++)
        {
            $option = substr ($options, $i, 1);
            $questions[$i]['options']['list'][$option]['count']++;
            
            if ($option === 'x')
            {
                $questions[$i]['skipped']++;
            }
        }
        
        for ($i = 0; $i < strlen ($importance); $i++)
        {
            if (substr ($importance, $i, 1) === '1')
            {
                $questions[$i]['importance']++;
            }
        }
    }
?>
        <div id="page">
            <header>
                <div id="title" class="text-center">
                    <div class="d-inline-flex align-items-center">
                        <img src="../../favicon.png" style="width: 4rem">
                        <h1 style="font-size: 3rem; margin-left: 0.5rem;">Jedovnice 2022</h1>
                    </div>
                    <div class="text-muted">
                        Výsledky volební kalkulačky na webu <a href="https://volby.jednoduse.cz">volby.jednoduse.cz</a>
                    </div>
                </div>
                <div class="mt-4">
                    Do konce voleb, 24. září 2022, sesbírala kalkulačka
                    <?php echo count ($uniqueResponses); ?> unikátních odpovědí.
                    (Data byla očištěna od&nbsp;opakovaných a výrazně neúplných vyplnění.)
                    Možnost označit otázku jako důležitou využilo minimum respondentů (pod 5&nbsp;%),
                    proto příslušné statistiky neuvádím.
                    Při posuzování výsledků je&nbsp;třeba mít na&nbsp;paměti,
                    že&nbsp;<strong>nejde o reprezentativní vzorek občanů</strong>.
                    Přesto mohou být výsledky zajímavé, a&nbsp;to&nbsp;zejména v&nbsp;případech,
                    kdy jedna z odpovědí výrazně převažuje – nejvýrazněji u&nbsp;otázek
                    č. <a href="#question-2">2</a> a <a href="#question-7">7</a>.
                </div>
                <div class="mt-2">
                    V datech lze statisticky vypozorovat skupinu otázek,
                    která rozděluje občany na dva tábory.
                    Jeden tábor prosazuje výstavbu supermarketu (<a href="#question-6">otázka 6</a>)
					a dalších komerčních bytů (<a href="#question-4">otázka 4</a>),
                    podporuje rozšiřování průmyslové zóny (<a href="#question-5">otázka 5</a>)
                    a souhlasí, aby Jedovnice usilovaly o status města (<a href="#question-25">otázka 25</a>);
                    druhý tábor to vidí opačně a podporuje zřízení muzea či galerie (<a href="#question-11">otázka 11</a>),
                    respektování názorů památkářů (<a href="#question-14">otázka&nbsp;14</a>),
                    výstavbu dětských hřišť bez čekání na dotace (<a href="#question-18">otázka&nbsp;18</a>)
                    a omezení pracovních jednání zastupitelstva (<a href="#question-22">otázka 22</a>),
                    s čímž zase nesouhlasí první tábor.
                </div>
                <div class="mt-2">
                    Ostatní otázky tak výrazné skupiny netvoří,
                    i když v jednotlivých případech lze najít některé další vztahy;
                    například kdo podporuje výstavbu obecních bytů (<a href="#question-3">otázka 3</a>),
                    ten by typicky uvítal podporu doučování (<a href="#question-10">otázka 10</a>),
                    a kdo by nechal vypracovat nový strategický plán rozvoje (<a href="#question-1">otázka 1</a>),
                    ten by většinou chtěl obnovit participativní rozpočet (<a href="#question-23">otázka 23</a>).
                </div>
                <div class="mt-2 text-end">
                    Josef Plch ml.
                </div>
                <section class="mt-3">
                    <h3>Seznam otázek</h3>
                    <ol style="column-count: 2; column-gap: 2rem;">
<?php
                    foreach ($questions as $i => $questionInfo)
                    {
                        echo (
                            indentation (6)
                            . '<li>'
                                . '<a href="#question-' . ($i + 1) . '">'
                                    . $questionInfo['title']
                                . '</a>'
                            . '</li>'
                            . PHP_EOL
                        );
                    }
?>
                    </ol>
                </section>
            </header>
            
            <main>
<?php
    foreach ($questions as $i => $questionInfo)
    {
        echo (indentation (4).'<div id="question-'.($i + 1).'" class="question">'.PHP_EOL);
        echo (indentation (5).'<div class="d-flex align-items-center justify-content-between">'.PHP_EOL);
        echo (indentation (6).'<h3>'.($i + 1).'. '.$questionInfo['title'].'</h3>'.PHP_EOL);
        // echo (indentation (6).'<div class="text-warning">Označeno za důležité: '.($questionInfo['importance'] + 0).'×</div>'.PHP_EOL);
        echo (indentation (5).'</div>'.PHP_EOL);
        echo (indentation (5).'<div>'.$questionInfo['details'].'</div>'.PHP_EOL);
        echo (indentation (5).'<div class="mt-3"><strong>'.$questionInfo['text'].'</strong></div>'.PHP_EOL);
        echo (indentation (5).'<table class="table table-striped mt-3 mb-0">'.PHP_EOL);
        echo (indentation (6).'<tr><th>Možnost</th><th class="w-count">Hlasy</th><th class="w-count">Podíl</th></tr>'.PHP_EOL);
        
        foreach ($questionInfo['options']['list'] as $optionCode => $optionInfo)
        {
            $percent = 100.0 * $optionInfo['count'] / count ($uniqueResponses);
            echo (
                indentation (6)
                . '<tr>'
                    . '<td>' . $optionInfo['text'] . '</td>'
                    . '<td class="w-count text-end">' . $optionInfo['count'] . '</td>'
                    . '<td class="w-count text-end">' . number_format ($percent, 1, ',', ' ') . ' %</td>'
                . '</tr>'
                . PHP_EOL
            );
        }
        
        echo (indentation (5) . '</table>' . PHP_EOL);
        echo (indentation (5) . '<div id="chart-' . ($i + 1) . '" class="chart mt-3"></div>' . PHP_EOL);
        echo (indentation (4) . '</div>' . PHP_EOL);
    }
?>
            </main>
        </div>

        <script>
            function drawCharts ()
            {
                let data = null;
                let options = null;
                let chart = null;
                <?php
                $indentation = '                ';
                foreach ($questions as $i => $questionInfo)
                {
                    echo ($indentation.PHP_EOL);
                    
                    // Scale => pie chart
                    if ($questionInfo['options']['type'] === 'scale')
                    {
                        $chartData = ["['Možnost', 'Hlasy']"];
                        $slices = [];
                        foreach ($questionInfo['options']['list'] as $optionCode => $optionInfo)
                        {
                            $chartData [] = "['".$optionInfo['text']."', ".$optionInfo['count']."]";
                            $slices [] = "{color: '".$optionInfo['color']."'}";
                        }
                        echo ($indentation."data = google.visualization.arrayToDataTable ([".implode (", ", $chartData)."]);".PHP_EOL);
                        echo ($indentation."options = {chartArea: {left: '5%', top: '5%', width: '90%', height: '60%'}, pieSliceText: 'percentage', slices: [".implode (", ", $slices)."]};".PHP_EOL);
                        echo ($indentation."chart = new google.visualization.PieChart (document.getElementById ('chart-".($i + 1)."'));".PHP_EOL);
                    }
                    // Independent => column chart
                    else
                    {
                        $chartData = ["['Možnost', 'Hlasy', {role: 'style'}]"];
                        foreach ($questionInfo['options']['list'] as $optionCode => $optionInfo)
                        {
                            $chartData [] = "['".$optionInfo['text']."', ".$optionInfo['count'].", 'color: ".$optionInfo['color']."']";
                        }
                        echo ($indentation."data = google.visualization.arrayToDataTable ([".implode (", ", $chartData)."]);".PHP_EOL);
                        echo ($indentation."options = {chartArea: {left: '7.5%', width: '85%'}, legend: {position: 'none'}, hAxis: {maxAlternation: 2, maxTextLines: 10}};".PHP_EOL);
                        echo ($indentation."chart = new google.visualization.ColumnChart (document.getElementById ('chart-".($i + 1)."'));".PHP_EOL);
                    }
                    
                    echo ($indentation."chart.draw (data, options);".PHP_EOL);
                }
                ?>
            }
            
            google.charts.load ('current', {'packages': ['corechart'], 'language': 'cz'});
            google.charts.setOnLoadCallback (drawCharts);
        </script>
<?php
}
?>
    </body>
</html>
