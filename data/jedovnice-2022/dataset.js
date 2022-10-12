'use strict';

const ANO_NE_5 = {type: 'scale', list: ['určitě ano', 'spíše ano', 'nevím / nemám názor', 'spíše ne', 'určitě ne']};

const CENSORED = '<span class="text-dark bg-dark">cenzurováno</span>';

const DATASET = {
    name:    'Jedovnice, rok 2022',
    author:  'Josef Plch ml.',
    version: '2022-10-12',
    headerMessage:
        '<div class="alert alert-info mt-2 mb-0">'
            + 'Volby, ke kterým se kalkulačka vztahovala, už proběhly.'
            + ' Statistiku&nbsp;odpovědí občanů si můžete prohlédnout zde:'
            + '<br>'
            + '<a href="https://volby.jednoduse.cz/data/jedovnice-2022/vysledky.pdf">'
                + 'https://volby.jednoduse.cz/data/jedovnice-2022/vysledky.pdf'
            + '</a>'
        + '</div>',
    evaluationNote:
        'Poznámka: Všechna kandidující uskupení byla oslovena'
        + ' se žádostí o odpovědi a připomínkování otázek,'
        + ' na což dostala deset dní, ale většina toho nevyužila.',
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
            nonFilingStatement:
                '<div><em>Komentář autora: U sdružení Jedovnice 2022 uvádím na výslovnou žádost pana Maguly celou konverzaci. Samotné zdůvodnění naleznete v jeho poslední odpovědi.</em></div>'
                + '<div class="mt-2"><em>Poznámka: Tři otázky byly nakonec vyřazeny, takže uváděné číslování může být posunuté.</em></div>'
                // Úvodní zpráva
                + '<div class="mt-3 card me-5">'
                    + '<div class="card-header">'
                        + '27. 8. 2022 ve 22:10'
                    + '</div>'
                    + '<div class="card-body" style="background-color: #eee">'
                        + '<p>Dobrý den,</p>'
                        + '<p>pro letošní komunální volby v Jedovnicích jsem připravil volební kalkulačku. Jedná se o nezávislý nástroj, který umožňuje voličům <b>najít politické uskupení s nejpodobnějšími názory</b>. Cílem není podpora konkrétních kandidátů, ale zvýšení zájmu občanů o komunální politiku. Kalkulačka ovšem nemůže fungovat bez zapojení kandidátů, a proto Vás chci požádat o spolupráci.</p>'
                        + '<p><b>Pokud se nebudete chtít zapojit, dejte mně to prosím vědět.</b> U Vašeho uskupení v takovém případě <b>bude veřejně uvedeno, že neodpovědělo</b>. Myslím, že je i ve Vašem zájmu věnovat vyplnění půl hodiny, neboť Vám může přinést nové voliče (pro srovnání: příprava trvala desítky hodin). Chcete-li prosazovat lepší komunikaci s občany, toto je jedna z možností.</p>'
                        + '<p>V níže uvedeném dotazníku je připraveno 28 otázek. Týkají se různých témat od výstavby bytů a dětských hřišť přes zpoplatnění parkování až po koupání v Olšovci. Otázky nejsou jen z mé hlavy, do jejich tvorby byla prostřednictvím internetu zapojena veřejnost. <b>Odpovědi nejsou rozlišovány na dobré a špatné,</b> voličům se zkrátka ukáží ti, kdo odpověděli stejně, respektive nejpodobněji.</p>'
                        + '<p>Snažil jsem se být objektivní a uvádět argumenty pro i proti; je ovšem možné, že se to někde nepovedlo. To je druhý důvod Vašeho zapojení: pokud narazíte na závadnou otázku, můžete ji ve formuláři připomínkovat. Otázky, které se ukáží jako problematické, před zveřejněním kalkulačky opravím či vyřadím.</p>'
                        + '<p>Formulář se vyplňuje za uskupení. <b>Stačí, když odpoví jeden kandidát, měl by ale zastupovat názory všech.</b> Pokud v některé otázce nejste jednotní, můžete ji přeskočit. Odkaz posílám vždy prvním dvěma kandidátům, kromě Josefa Přibyla a Petra Šteflíčka, na které jsem nesehnal kontakt. Můžete ovšem vyplněním pověřit i kohokoli jiného, když se domluvíte.</p>'
                        + '<p>'
                            + '<b>Odkaz na formulář, otevřený do 5. září:</b>'
                            + '<br>' + CENSORED
                            + '<br>Heslo k ověření totožnosti pro Vaše uskupení: ' + CENSORED
                        + '</p>'
                        + '<p>'
                            + 'Zde se můžete podívat, jak bude kalkulačka vypadat, zatím ovšem neobsahuje odpovědi kandidátů:'
                            + '<br><a href="https://volby.jednoduse.cz/">https://volby.jednoduse.cz/</a>'
                        + '</p>'
                        + '<p>V případě jakýchkoli technických potíží mě neváhejte kontaktovat.</p>'
                        + '<p class="mb-0">'
                            + 'Předem děkuje a na spolupráci se těší'
                            + '<br>Josef Plch mladší'
                            + '<br>E-mail: ' + CENSORED
                            + '<br>Telefon: ' + CENSORED
                        + '</p>'
                    + '</div>'
                + '</div>'
                // 1. odpověď + dodatek
                + '<div class="mt-3 card ms-5">'
                    + '<div class="card-header">'
                        + '1. 9. 2022 ve 12:16'
                    + '</div>'
                    + '<div class="card-body" style="background-color: #def">'
                        + '<p>Vážený pane Plchu,<p>'
                        + '<p>prostudoval jsem otázky vámi zaslané volební kalkulačky. Při sebelepší vůli nemohu z důvodů, které uvádím níže, odpovědět na 8 otázek, což činí cca 22% z vašeho zadání. Jsou to tyto otázky.<p>'
                        + '<ul>'
                            + '<li>Ot. č. 4 – Bylo provedeno kvalifikované zjištění, který typ občanské vybaveností a v kterých částech obce je třeba doplnit? Moje odpověď by se neopírala o znalost, ale jen o pocit.</li>'
                            + '<li>Ot. č. 5 – Neznám další způsob, kterým by obec podporovala výstavbu v Průmysl. zóně, kromě toho, že ji v první polovině devadesátých let vymezila v Územním plánu. Všechny ostatní kroky obce se od této doby řídí zákony, které jsou s tím svázány.</li>'
                            + '<li>Ot. č. 6 – Tato otázka je z mého pohledu zavádějící. Nejprve občany seznamte s tím, proč zastupitelé většinově hlasovali proti výstavbě nového velkého obchodu v Jedovnicích. Určitě to víte.</li>'
                            + '<li>Ot. č. 8 – Bez odborné studie, která se bude opírat o již úspěšně realizované a i nepovedené projekty v oblasti likvidace sinic ve vodních nádržích, tedy o současné zkušenosti, se nedá odpovědně odpovědět na vaši otázku v šíři odpovědi – ano, možná, snad nebo ne.</li>'
                            + '<li>Ot. č. 10 – Pokud jste seznámen s právními vazbami obce – zřizovatele a Základní školou, jako se zřizovanou organizací a dále systémem financování školy, jistě chápete, že otázka tak jak je vámi formulována je nezodpověditelná. Pocit, že je třeba něco udělat s úrovní vědomostí a vzdělanosti našich dětí a mládeže, s vámi sdílím.</li>'
                            + '<li>Ot. č. 14 – Pokud je obci objekt, který požívá jakékoliv právní ochrany je nemyslitelné, aby byl zákon porušován. Názor je názorem a zákon zákonem.</li>'
                            + '<li>Ot. č. 20 – Který druh dopravy chcete v chatové oblasti omezit? Nákladní, zemědělskou, servisní, osobní? Jakým způsobem chcete omezit zákonné právo hotelu Kůlna na příjezd hostů k objektu? Prosím vysvětlete problémy a potom mohu dát hlas některému z vámi nalezených způsobů řešení.</li>'
                            + '<li>Ot. č. 22 – Tato otázka je pro mne jako pro venkovana skutečně velkou neznámou. Doporučte mi prosím řešení prováděná v jiných obcích. Opět musím konstatovat, že moje odpověď by se neopírala o znalost, ale jen o pocit.</li>'
                        + '</ul>'
                        + '<p>Závěrem chci ještě jednou konstatovat, že nemám důvod nespolupracovat s vámi na vámi konstruované volební kalkulačce. Jen se  prosím snažte pochopit, že u řady problémů je zjednodušení jak v otázce tak v odpovědi škodlivé. A to jak pro odpovídajícího, tak pro člověka, který odpovědi čte a rozhoduje se pouze na základě pocitu, ne zkušenosti či znalosti.</p>'
                        + '<p>Moji odpověď společně s vaším návrhem zasílám některým kolegům.</p>'
                        + '<p>Pokud zveřejníte informaci, že naše volební seskupení Jedovnice 2022 odmítlo vyplnit vaši volební kalkulačku, zveřejněte prosím s tímto vaším sdělením občanům i tento můj mail v plném znění.</p>'
                        + '<p class="mb-0">'
                            + 'Děkuji'
                            + '<br>Gustav Magula'
                        + '</p>'
                    + '</div>'
                + '</div>'
                + '<div class="mt-3 card ms-5">'
                    + '<div class="card-header">'
                        + '1. 9. 2022 ve 14:25'
                    + '</div>'
                    + '<div class="card-body" style="background-color: #def">'
                        + '<p>Vážený pane Plchu,</p>'
                        + '<p>při kontrole dnes odesílané pošty jsem zjistil, že jsem udělal chybu v zápisu procent otázek, na které vám nejsem schopen odpovědět. Není to cca 22%. Je to cca 28%. Ještě jednou se omlouvám za překlep.</p>'
                        + '<p class="mb-0">Gustav Magula</p>'
                    + '</div>'
                + '</div>'
                // 2. odpověď
                + '<div class="mt-3 card me-5">'
                    + '<div class="card-header">'
                        + '4. 9. 2022 v 9:02'
                    + '</div>'
                    + '<div class="card-body" style="background-color: #eee">'
                        + '<p>Dobrý den,</p>'
                        + '<p>velmi děkuji za pozorné prostudování otázek a připomínky k nim. Některé zohledním, jiné ne, u dalších bych potřeboval upřesnění, viz dále; každopádně chci předeslat, že máte možnost odpovědět jen na některé otázky a ty, které považujete za problematické, lze přeskočit. (Vyhodnocení shody u přeskočených pak technicky probíhá tak, jako byste svůj hlas rovnoměrně rozdělil mezi všechny odpovědi, např. jsou-li možnosti ano–ne a vy neodpovíte, bude shoda vždy 50 %.)</p>'
                        + '<p>K jednotlivým připomínkám:</p>'
                        + '<ul>'
                            + '<li><b>Otázka č. 4</b>: Pokud vím, žádné takové kvalifikované šetření neproběhlo, to by musela zajistit obec. Nicméně například školka i zubařka jsou už teď plně obsazené. <b>Závěr: měním možnost</b> <em>„jen při současném rozvoji občanské vybavenosti“</em> na <em>„jen při současném rozvoji vybavenosti, nejlépe určeném odbornou studií“</em>.</li>'
                            + '<li><b>Otázka č. 5</b>: Mám za to, že se zastupitelstvo v tomto období zaobíralo žádostí o změnu územního plánu v lokalitě průmyslové zóny, jejímž cílem bylo umožnit výstavbu, která teď možná není. Týkalo se to možná pana Grygy, ale to si nejsem jistý. Každopádně mezi sebou zastupitelé diskutovali, jestli je to dobrý nápad, aby tam nenastala přílišná hlučnost atd. Měl jsem tedy za to, že obec stále svoji roli hraje, ačkoli zóna jako taková je už dána. V neposlední řadě pak předpokládám, že by dalšímu rozšiřování zóny šlo zabránit převodem dosud nezastavěných ploch zpět na ornou půdu. Otázku zatím neměním, kdyžtak své připomínky prosím upřesněte.</li>'
                            + '<li><b>Otázka č. 6</b>: Důvod neznám, poučte mě. Přispěje-li to vyznění otázky, tuto informaci doplním.</li>'
                            + '<li><b>Otázka č. 8</b>: Jsem poněkud zmaten, otázka možnosti ano/ne neobsahuje. Každopádně první množnost (<em>„pokusit se intenzivněji bojovat proti sinicím“</em>) předpokládá spolupráci s odborníky. Prosím o upřesnění výtky.</li>'
                            + '<li><b>Otázka č. 10</b>: Ne, nevím, jak je nastavené financování základní školy. Předpokládal jsem, že obec coby zřizovatel takové možnosti má a otázku ve svých připomínkách nerozpozorovala ani paní Bayerová, která tuším je/byla členkou školské rady. Prosím o vysvětlení, v čem je potíž.</li>'
                            + '<li><b>Otázka č. 14</b>: V otázce se o žádném porušování zákona nemluví, vlastně zde není slovo „zákon“ vůbec použito, takže nerozumím, na co reagujete.</li>'
                            + '<li><b>Otázka č. 20</b>: Nikde neříkám, že chci omezovat příjezd hostů ke Kůlně, otázka záměrně nehovoří o žádném konkrétním případu, abych se do toho nezamotal. Nicméně teď můžou jezdit do chatové oblasti i houbaři, kdyby chtěli (tím netvrdím, že se to děje), a například pan Doležel si na zastupitelstvech opakovaně stěžoval, že u Surfu parkuje víc aut, než mají povoleno. Konečně k vyšší dopravě jistě přispívá i nová výstavba u Rakovanu, kterou předpokládám musela obec umožnit. Takže jedním ze způsobů by bylo zaříznutí další výstavby. A třeba je možné regulovat počet aut na chatu? Nechci předjímat ani nemám kapacity toto všechno zjišťovat, proto otázka nezní „omezovat“, ale „hledat cesty k omezování“.</li>'
                            + '<li><b>Otázka č. 22</b>: <b>Otázku jsem přepracoval.</b> Nové znění: <em>Kastrační program / Obcemi se mnohdy potulují toulavé kočky a nechtěná koťata jsou stále zabíjena. Některé obce proto zavádějí kastrační programy, v naší blízkosti například Prostějov, který na kastrace přispívá od roku 2010 (dříve 300 Kč, od letoška 1000 Kč). / Měly by Jedovnice zavést kastrační program?</em></li>'
                        + '</ul>'
                        + '<p>Chápu, že některé otázky či odpovědi mohou působit jako příliš zjednodušující, ale:</p>'
                        + '<ul>'
                            + '<li>to volební programy taky</li>'
                            + '<li>kdyby byly moc dlouhé, nikomu by se je nechtělo číst</li>'
                        + '</ul>'
                        + '<p>Snažil jsem se o kompromis zjednodušující otázky maximálně tak, aby ještě nebyly zavádějící. Chcete-li, můžete využít upřesnění odpovědi, které se sice číselně nevyhodnocuje, ale občané je uvidí.</p>'
                        + '<p>Protože chci věc vyřešit pokud možno k oboustranné spokojenosti, <b>posouvám uzávěrku odpovědí na středu 7. září.</b></p>'
                        + '<p class="mb-0">'
                            + 'S pozdravem'
                            + '<br>Josef Plch ml.'
                        + '</p>'
                    + '</div>'
                + '</div>'
                // 3. odpověď
                + '<div class="mt-3 card me-5">'
                    + '<div class="card-header">'
                        + '5. 9. 2022 v 1:17'
                    + '</div>'
                    + '<div class="card-body" style="background-color: #eee">'
                        + '<p>Dobré ráno,</p>'
                        + '<p>oklikou se ke mně doneslo, že někteří z kandidátů (nevím kdo) považují kalkulačku za tendenční počin mající komusi pomoci, či snad uškodit, a proto že nebudou odpovídat. <b>Dovolte tedy, abych projekt krátce obhájil.</b> Kdyby se někdo chtěl rozmyslet (ale přemlouvat nikoho nebudu), <b>prodlužuji uzávěrku do středy 7. září</b>. Tuto zprávu píši všem původním příjemcům; ti, kdo už odpověděli, nebo to plánují, ji mohou považovat za bezpředmětnou.</p>'
                        + '<p>Předně: myslím, že volební kalkulačky (obecně, není to můj vynález) lze těžko vytvářet někomu na míru. Jak? Kandidáti vybírají možnosti, voliči vybírají možnosti. Voliči uvidí ty kandidáty, kteří zvolili stejně. To je celé. Napadají mě jen dva potenciální problémy:</p>'
                        + '<ul>'
                            + '<li><b>Otázka nebo její odpovědi mohou být špatně formulované.</b> S touto možností počítám a už v původním mejlu jsem zmiňoval, že můžete otázky připomínkovat a nebráním se jejich úpravě. V některých případech už jsem připomínky kandidátů zapracoval, s dalšími ještě jednám. Pokud ale teď budete mlčet a začnete otázky kritizovat až po zveřejnění, tak bohužel…</li>'
                            + '<li><b>Kandidát nechce odpovědět, protože má obavy, že jeho odpověď bude nepopulární.</b> To se může stát a umím si představit i situace, kdy bych to řešil sám. Můžete svoji volbu obhájit pomocí upřesňující odpovědi, anebo otázku přeskočit.</li>'
                        + '</ul>'
                        + '<p>Pokud se vám nelíbí konkrétní otázky, můžete přeskočit jen ty, není třeba bojkotovat kompletně všechno. Přeskočené otázky se budou vyhodnocovat, jako byste svůj hlas rovnoměrně rozdělili mezi všechny odpovědi.</p>'
                        + '<p>Mimochodem ano, oba moji rodičové kandidují, ale každý za jinou stranu: jedna byla dosud v radě, druhá nově vznikla a profiluje se spíše jako opozice současného vedení. Já sám mám v některých případech jiný názor než obě tato uskupení.</p>'
                        + '<p>Druhá (údajná) výtka vůči kalkulačce zní, <b>že jsem do tvorby otázek nezapojil kandidáty</b>. Nevím, zda to byla chyba, ale nedělal jsem to záměrně. Kalkulačka je pro voliče, proto jsem sbíral tipy od široké veřejnosti a na kandidáty jsem se speciálně neobracel. Sbíral jsem tipy v průběhu celých letních prázdnin na Facebooku a mám za to, že kdo se zajímal, mohl se to dozvědět a zapojit se. Ano, ne každý je na Facebooku, ale pro mě to byl nejjednodušší kanál, i tak vzal sběr dost času.</p>'
                        + '<p><b>Pokud by někomu bylo odpovídání vyloženě proti mysli, nabízím i možnost zveřejnit krátké zdůvodnění, proč kalkulačku nevyplnil.</b> Jestli mě ale budete jen pomlouvat před svými známými a mně nic neřeknete, považuju to ke vzájemné škodě za neseriózní.</p>'
                        + '<p>Všem, kdo už odpověděli nebo připomínkovali otázky, velmi děkuji.</p>'
                        + '<p class="mb-0">'
                            + 'Předem děkuje a na spolupráci se těší'
                            + '<br>Josef Plch mladší'
                            + '<br>E-mail: ' + CENSORED
                            + '<br>Telefon: ' + CENSORED
                        + '</p>'
                    + '</div>'
                + '</div>'
                // 4. odpověď
                + '<div class="mt-3 card ms-5">'
                    + '<div class="card-header">'
                        + '7. 9. 2022 v 15:35'
                    + '</div>'
                    + '<div class="card-body" style="background-color: #def">'
                        + '<p>Vážený pane Plchu,</p>'
                        + '<p>děkuji vám za ochotu pozměnit formulace a snad i obsah řady otázek ve vaší kalkulačce. Váš přístup je velmi pozitivní. Omlouvám se však. Při sebelepší vůli nemohu odpovídat na otázky vaší kalkulačky, a to z těchto, níže uvedených důvodů.</p>'
                        + '<p>Informoval jsem se na principy fungování volebních kalkulaček, které byly využívány občany tohoto i jiných států před volbami. Fungování těchto kalkulaček – počítačových programů vycházelo ze statistických, matematických a programátorských postupů, které vycházely ze srovnání konkrétních, platných a zveřejněných volebních programů politických stran a seskupení.</p>'
                        + '<p>V případě vašeho návrhu kalkulačky jste vycházel z vámi formulovaných pohledů na děje v obci a z vašich otázek k nim formulovaným.</p>'
                        + '<p>Podle běžných postupů v této oblasti zpracování dat musím konstatovat, že pokud vaše kalkulačka nepracuje na porovnáním přání, pocitů a názorů jednotlivých voličů s konkrétními volebními programy stran a seskupení, nemůže být objektivní. Neopírá se o prezentované cíle a názory stran a seskupení v porovnání s přáním občana a jeho volbou.</p>'
                        + '<p class="mb-0">Gustav Magula, Jedovnice 2022</p>'
                    + '</div>'
                + '</div>'
                // 5. odpověď
                + '<div class="mt-3 card me-5">'
                    + '<div class="card-header">'
                        + '7. 9. 2022 v 17:27'
                    + '</div>'
                    + '<div class="card-body" style="background-color: #eee">'
                        + '<p>Dobré odpoledne,</p>'
                        + '<p>děkuji za odpověď, ačkoli mě mrzí. <b>S Vaší argumentací ale nesouhlasím, rozvedu.</b></p>'
                        + '<p>Volební kalkulačky fungují různými způsoby. Z mého pohledu nejvýznamnější český projekt, <a href="https://www.volebnikalkulacka.cz/">VolebniKalkulacka.cz</a>, používá dva přístupy:</p>'
                        + '<ul>'
                            + '<li><em>Inventura hlasování</em> funguje zpětně – volič porovnává hlasování za uplynulé období s tím, jak by se rozhodoval on. To je velmi objektivní, ale v Jedovnicích nemožné, protože neexistuje veřejný soupis, jak kdo hlasoval.</li>'
                            + '<li><em><b>Názorový test</b></em> funguje stejně jako můj projekt – všem kandidátům jsou zaslány stejné otázky, na něž odpoví (nebo také ne).</li>'
                        + '</ul>'
                        + '<p>Existuje i třetí typ, který zmiňujete, totiž porovnání programů, ale ten je problematický, protože každý se v programu věnuje něčemu jinému. Jak to pak porovnávat?</p>'
                        + '<p>Pochopitelně, že jsem při formulaci otázek vycházel ze svých pohledů, ale <b>toho se přece zbavit nejde</b>. Nepokládám to samo o sobě za závadné – chcete-li otázky rozporovat, buďte prosím konkrétní (jako v prvním mejlu) … Opakuji ale, že jsem otázky netvořil jen já sám, mnohé by mě ani nenapadly. Například otázku k nábřeží u barachovského ostrůvku má na svědomí Vaše dcera.</p>'
                        + '<p>'
                            + 'Myslím, že se příliš upínáte na volební programy:'
                            + '<br><em>„Podle běžných postupů v této oblasti zpracování dat musím konstatovat, že pokud vaše kalkulačka nepracuje na porovnáním přání, pocitů a názorů jednotlivých voličů s konkrétními volebními programy stran a seskupení, nemůže být objektivní. Neopírá se o prezentované cíle a názory stran a seskupení v porovnání s přáním občana a jeho volbou.“</em>'
                        + '</p>'
                        + '<p>Programy jsou jistě důležité, ale nikoli samospásné. Co když moje kalkulačka řeší otázky, které nikdo v programu nemá? Věřím, že tam takové budou, a pro někoho jsou třeba důležité. Důležitost otázek si může určit každý vyplňující tím, že některé otázky přeskočí (pak se vůbec nevyhodnocují) anebo naopak označí jako důležité (pak mají 3× vyšší váhu).</p>'
                        + '<p>Kol a kolem: zdá se mně, že požadujete víc, než je dosažitelné. Pokud na tom však trváte a kalkulačku vyplnit nechcete, <b>zkuste prosím zdůvodnění zkrátit</b>, celá naše konverzace se mně zdá ke zveřejnění příliš obsáhlá (a místy možná příliš osobní).</p>'
                        + '<p class="mb-0">'
                            + 'S pozdravem'
                            + '<br>Josef Plch ml.'
                        + '</p>'
                    + '</div>'
                + '</div>'
                + '<div class="mt-3"><em>Dovětek autora: Další reakce už do 14. září nepřišla, zástupci uskupení pouze trvali na zveřejnění celé konverzace.</em></div>'
        },
        {
            name: 'Budoucnost', // Jaroslav Šíbl, Jitka Teturová, Michal Prause
            nonFilingStatement:
                '<p>Myslíme si, že občané jsou schopni z jednotlivých volebních programů vyhodnotit priority a není nutné je srovnávat na této kalkulačce.</p>'
                + '<p>Otázky, které jsou zde zahrnuty, ale nejsou všechny ty, které „pálí“ Jedovnice, a tudíž jsou pro občany zavádějící a některé ani nejsou správně nazvané (zpravodaj – informace).</p>'
                + '<p>Je tam mnoho témat, která jsou řešena současným zastupitelstvem. Jiný občan = jiná volební kalkulačka.</p>'
                + '<p>Jitka Teturová a Jaroslav Šíbl, Budoucnost</p>'
                + '<hr>'
                + '<p><em>Komentář autora: Jistě je možné, že zde některé důležité otázky chybí, ale nic není dokonalé. Pokud naopak volič pokládá otázku za zbytečnou, může ji přeskočit, takže se nevyhodnocuje.</em></p>'
                + '<p class="mb-0"><em>Josef Plch ml.</em></p>'
        },
        {
            name: 'Alternativa pro Jedovnice', // Věra Přibylová, Petr Šteflíček, Miroslava Štěrbová
            colour: '#bf0202'
        },
        {
            name: 'Volba pro Jedovnice', // Marie Gabrielová, Lukáš Kocman, Hana Formánková
            nonFilingStatement:
                '<p>Děkujeme za nabídku zúčastnit se projektu Volební kalkulačka. Většina kandidátů, kteří se s ním seznámili, rozhodla, že se projektu nezúčastníme.</p>'
                + '<p>Litujeme, že Vám nemůžeme dát příznivější odpověď.</p>'
                + '<p class="mb-0">Marie Gabrielová, Volba pro Jedovnice</p>'
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
            options: ANO_NE_5,
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
                list: [
                    'ano, a mělo by vzniknout víc návrhů',
                    'ano, ale jeden návrh stačí',
                    'ne'
                ]
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
            options: ANO_NE_5,
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
                     + ' <img src="./data/jedovnice-2022/images/prumyslova-zona.jpg" class="mt-2 w-100">',
            options: {
                type: 'scale',
                list: [
                    'ano',
                    'jen bezhlučnou a pokud přinese hodně pracovních míst',
                    'ne'
                ]
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
            options: ANO_NE_5,
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
                     + '<img src="./data/jedovnice-2022/images/nabrezi.jpg" class="mt-2 w-100">',
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
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
                     + '<img src="./data/jedovnice-2022/images/rybolov-2019.jpg" class="mt-2 w-100">'
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
            options: ANO_NE_5,
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
                     + '<img src="./data/jedovnice-2022/images/smog-brno.jpg" class="mt-2 w-100">'
                     + '<div class="text-center">Příklad vizuálního smogu v Brně</div>',
            options: {
                type: 'scale',
                list: [
                    'ano, všude',
                    'jen v centru',
                    'ne'
                ]
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
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
            options: ANO_NE_5,
            responses: {
                'KDU–ČSL': {option: 'určitě ano', comment: 'I kriticky, ale neútočně.'},
                'Restart': {option: 'určitě ano', comment: 'Možnost, aby jednotliví občané mohli vyjádřit svůj názor, i kriticky, považujeme za zásadní.'}
            }
        },
        {
            title:   'Status města',
            text:    'Měly by Jedovnice usilovat o získání statusu města?',
            details: 'Jedovnice se blíží hranici tří tisíc obyvatel, od které je možné žádat o udělení statusu města.'
                     + ' Jedná se pouze o prestižní záležitost bez významnějších praktických dopadů.',
                     /*
                      * Požadavky: https://moderniobec.cz/stanoveni-obce-mestem/ (2011)
                      * Nová města (viz Seznam bývalých měst v Česku):
                      * 2015 Bělčice, okres Strakonice
                      * 2019 Lipnice nad Sázavou, okres Havlíčkův Brod
                      * 2022 Miličín, okres Benešov
                      */
            options: ANO_NE_5,
            responses: {
                'KDU–ČSL': {option: 'spíše ne'},
                'Restart': {option: 'určitě ne'}
            }
        }
    ]
};
