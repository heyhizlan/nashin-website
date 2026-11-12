// Fitment data supplied by the client (Nashin), kept verbatim below so it can be
// diffed against future lists. Names are cleaned up through `aliases`, and the
// test suite fails if any client entry has no alias, so nothing is silently dropped.
//
// minRim: smallest wheel diameter (inches) each kit clears.
// ⚠ PENDING CLIENT CONFIRMATION: these are working values based on rotor
// diameter, not figures from Nashin. Replace them once the client confirms.
export const kits = [
 {id:'n1-286',series:'N1',rotor:286,minRim:15,list:`
(HONDA)
Jazz GD
Jazz GE
Jazz GK
City GM2
City GM6
City GN2
Freed
Civic EG/EK sohc
Civic EG/EK dohc
Civic EK9 type-r
(TOYOTA)
Vios ncp42
Vios ncp93
Vios ncp150/151
Yaris nsp151
Tank
Townace
Sienta xp170
AE101/111
(PERODUA)
Myvi G1/G2
Myvi G3
Bezza
Axia
Kenari
Kelisa
Viva
Alza
Ativa
(PROTON)
Wira
Saga blm
Saga vvt
Persona
Persona BH vvt
Gen2
Satria neo
Waja
Iriz
(NISSAN)
Almera N17
Almera N18
(MAZDA)
MX5 2015
(SUZUKI)
Swift zc81
Swift zc82
Swift zc83
Swift zc31
Swift zc32
Swift zc33`},
 {id:'n1-302',series:'N1',rotor:302,minRim:16,list:`
(HONDA)
Jazz GE
Jazz GK
City GM2
City GM6
City GN2
Freed
Civic EG/EK dohc
Crz
(TOYOTA)
Vios ncp42
Vios ncp93
Vios ncp150/151
Yaris nsp151
Tank
Townace
Sienta xp170
AE101/111
(PERODUA)
Myvi G1/G2
Myvi G3
Bezza
Axia
Kenari
Kelisa
Viva
Alza
Ativa
(PROTON)
Wira
Persona BH vvt
Satria neo
Preve
Suprima
(NISSAN)
Almera N17
Almera N18
Ad resort
(MAZDA)
MX5 ND 2015
(SUZUKI)
Swift zc31
Swift zc32
Swift zc33
(FORD)
Fiesta 08`},
 {id:'n3-330',series:'N3 / GN3',rotor:330,minRim:17,list:`
(TOYOTA)
Alphard ANH10/20/30
Vellfire ANH10/20/30
Estima ACR30/50
Camry ACV30/40/50/70
Voxy z80
Harrier xu50
Harrier xu60
Harrier xu80
Mark x grx120
Mark x grx130
Caldina
Yaris
Vios ncp42
Vios ncp93
Vios ncp150/151
Vios AC100
Yaris nsp151
Yaris GR
Yaris cross AC200
Sienta xp170
MR2 sw20
Ft86
GR86
Altis 03
Altis 08
Altis 15
Innova 04-14
Wish
Corolla cross
(PROTON)
Wira
Preve
Suprima
Gen2
Persona BH
X70
X50
S70
Satria neo
Inspira
(HONDA)
Jazz GE
Jazz GK
City GM2
City GM6
City GN2
Civic EG/EK dohc
Civic Fb
Civic fd
Civic fc
Civic fe
Civic fk
Civic fl
CRZ
BRV
Freed
HRV RU/RV
Accord CM
Accord CP
Accord CR
Odyssey rb1
Odyssey RC1
Crv 12-16
Stepwagon RP3
Stream
(PERODUA)
Myvi G1/G2
Myvi G3
Axia
Bezza
Ativa
Alza
Aruz
(MAZDA)
2 DJ
3 BM
3 BP
6 GJ
CX5 KE
CX5 KF
CX3
CX30
MX5 NC
MX5 ND
RX8
(NISSAN)
Grand livina
Serena c26
Serena c27
Sentra N16
Sentra B15
Teana
Sylphy B17
Almera N17
Almera N18
Latio
(SUZUKI)
Swift zc82
Swift zc33
(MITSUBUSHI)
Lancer GT
Galant 99-04
FTO
Colt
Grandis
Xpander
Evo 3
(HYUNDAI)
Elantra MD
Elantra AD
Veloster
(VW)
POLO GTI
JETTA
GOLF MK5/6/7
TIGGUAN
SCIROCCO
(BMW)
E36
E46
E90
(SUBARU)
Brz
Xv1
Xv2
(MINI)
Cooper R56
Cooper F55/56
(FORD)
Fiesta 08
(KIA)
Cerato K3
Forte
Optima K5`},
 {id:'n3-345',series:'N3 / GN3',rotor:345,minRim:18,list:`
(TOYOTA)
Alphard ANH10/20/30
Vellfire ANH10/20/30
Estima ACR30/50
Wish
Camry ACV30/40/50/70
Voxy z80
Harrier xu50
Harrier xu60
Harrier xu80
Mark x grx120
Mark x grx130
Caldina
Yaris GR
Sienta xp170
Ft86
GR86
Altis 03
Altis 08
Altis 15
Innova 04-14
CHR
Corolla cross
(PROTON)
X70
S70
Inspira
(HONDA)
Civic Fb
Civic fd
Civic fc
Civic fe
Civic fk
Civic fl
CRZ
BRV
HRV RU/RV
Accord CM
Accord CP
Accord CR
Odyssey rb1
Odyssey RC1
Crv 12-16
Stepwagon RP3
Stream
(MAZDA)
3 BM
3 BP
6 GJ
CX5 KE
CX3
CX30
RX8
(NISSAN)
Serena c26
Serena c27
(MITSUBUSHI)
Lancer GT
Grandis
Xpander
Evo 3
(HYUNDAI)
Elantra MD
Elantra AD
Veloster
(VW)
POLO GTI
JETTA
GOLF MK5/6/7
TIGGUAN
SCIROCCO
(BMW)
E36
E46
E60
E90
F30
F10
(SUBARU)
Brz
Xv1
Xv2
Levorg
(MINI)
Cooper R56
Cooper F55/56
(FORD)
Mondeo 15
Focus 16
(KIA)
Cerato K3
Optima K5
(AUDI)
A3`},
 {id:'n3-355',series:'N3 / GN3 / GR3',rotor:355,minRim:18,list:`
(MAZDA)
3 BM
3 BP
6 GJ
CX5 KF
CX30
CX3
(PROTON)
X50
(HYUNDAI)
ELANTRA MD
ELANTRA AD
(KIA)
CERATO K3
OPTIMA K5
(MITSUBISHI)
LANCER GT
GRANDIS
XPANDER
(PROTON)
INSPIRA
(HONDA)
ACCORD CM
ACCORD CP
ACCORD CR
CIVIC FB
CIVIC FD
CIVIC FC
CIVIC FE
CIVIC FK
CIVIC FL
ODSSEY RB1
ODSSEY RC1
STREAM
STEPWAGON RP3
HRV RU
HRV RV
BRV
(TOYOTA)
ALPHARD ANH10/20/30
VELLFIRE ANH20/30
ESTIMA ACR30/50
CAMRY ACC30/40/50/70
VOXY
FT86
GR86
ALTIS 08
ALTIS 15
CALDINA
HARRIER XU60
HARRIER XU80
COROLLA CROSS
(SUBARU)
XV1
XV2
BRZ
LEVORG
(VW)
Golf mk5/6/7/8
Jetta
Passat
Tigguan
Arteon
Sharan
Scirroco
(AUDI)
A3`},
 {id:'n5-355',series:'N5 / GN5 / GR5',rotor:355,minRim:18,list:`
(PROTON)
X70 CKD
X70 CBU
X50
(TOYOTA)
Alphard anh10/20/30
Alphard agh40
Vellfire anh20/30
Estima acr30/50
Camry avc 30/40/50/70
Voxy
Wish
Altis 08
Altis 15
Fj cruiser
Hilux
Caldina
Harrier xu60
Harrier xu80
Fortuner
Ft86
GR86
Corolla cross
Chr
Wish
MARK X 09
(BMW)
E60/63/64
E46
F10
F30
E90
G30
G20
(VW)
Golf mk5/6/7/8
Tigguan
Scirocco
Jetta
Passat
Arteon
Sharan
(HONDA)
Civic fd
Civic fb
Civic fc
Civic fe
Civic fl
Civic fk
Accord cm
Accord cp
Accord cr
Stream
Odyssey rbq
Odyssey rc1
Crv 17 rw 1.5t
Crv 07-12
Stepwagon rp3
Brv
Hrv ru
Hrv rv
(MITSUBISHI)
Lancer gt
Xpander
Grandis
Evo 3
Triton 2022
(MERCEDES)
W204
W176
W177
W117
(HYUNDAI)
Elantra md
Elantra ad
Santa fe 14-19
(KIA)
Cerato k3
Optima k5
Carnival 2020
(NISSAN)
Navara np300
Fairlady 350z
Xtrail t32
(FORD)
Mustang
Ranger
(VOLVO)
XC60
(MAZDA)
3 bm
3 bp
6 gj
Cx5 kf
Cx30
Cx3
RX8
(WEY)
Tank 300
(MINI)
Cooper clubman r60
Cooper f56/55
(LEXUS)
NX
RX
IS
(AUDI)
A3
A4 B8
A4 B9
A5
A6`},
 {id:'gn5-380',series:'GN5 / GR5',rotor:380,minRim:19,list:`
(TOYOTA)
Alphard anh20/30
Alphard agh40
Vellfire anh20/30
Estima acr30/50
Camry avc30/40/50/70
Harrier xu60
Harrier xu80
VOXY
(LEXUS)
NX
(BMW)
G30/20`},
 {id:'gn8-355',series:'GN8',rotor:355,minRim:18,list:`
(TOYOTA)
Hilux
Fj cruiser
Fortuner
Alphard anh20/30
Vellfire anh20/30
Camry avc30/40/50/70
Harrier xu60
Harrier xu80
Estima acr30/50
Voxy
(FORD)
Ranger
Ranger raptor
(MITSUBISHI)
Triton 2019`}
];

export const brandAliases = {HONDA:'Honda',TOYOTA:'Toyota',PERODUA:'Perodua',PROTON:'Proton',NISSAN:'Nissan',MAZDA:'Mazda',SUZUKI:'Suzuki',FORD:'Ford',MITSUBISHI:'Mitsubishi',MITSUBUSHI:'Mitsubishi',HYUNDAI:'Hyundai',VW:'Volkswagen',BMW:'BMW',SUBARU:'Subaru',MINI:'MINI',KIA:'Kia',AUDI:'Audi',MERCEDES:'Mercedes-Benz',VOLVO:'Volvo',WEY:'WEY',LEXUS:'Lexus'};

// Keyed by brand + client entry (lower case, single spaces). One client entry can
// map to several models, e.g. "HRV RU/RV" covers both generations.
const a = (brand, map) => Object.fromEntries(Object.entries(map).flatMap(([names, to]) => names.split('|').map(n => [`${brand}|${n}`, [].concat(to)])));
export const aliases = {
 ...a('Honda',{
  'jazz gd':'Jazz GD','jazz ge':'Jazz GE','jazz gk':'Jazz GK','city gm2':'City GM2','city gm6':'City GM6','city gn2':'City GN2','freed':'Freed',
  'civic eg/ek sohc':'Civic EG/EK SOHC','civic eg/ek dohc':'Civic EG/EK DOHC','civic ek9 type-r':'Civic EK9 Type R','crz':'CR-Z',
  'civic fb':'Civic FB','civic fd':'Civic FD','civic fc':'Civic FC','civic fe':'Civic FE','civic fk':'Civic FK','civic fl':'Civic FL',
  'brv':'BR-V','hrv ru/rv':['HR-V RU','HR-V RV'],'hrv ru':'HR-V RU','hrv rv':'HR-V RV',
  'accord cm':'Accord CM','accord cp':'Accord CP','accord cr':'Accord CR',
  'odyssey rb1|odssey rb1|odyssey rbq':'Odyssey RB1','odyssey rc1|odssey rc1':'Odyssey RC1',
  'crv 12-16':'CR-V (2012–2016)','crv 07-12':'CR-V (2007–2012)','crv 17 rw 1.5t':'CR-V RW 1.5T (2017+)',
  'stepwagon rp3':'Stepwgn RP3','stream':'Stream'}),
 ...a('Toyota',{
  'vios ncp42':'Vios NCP42','vios ncp93':'Vios NCP93','vios ncp150/151':'Vios NCP150/151','vios ac100':'Vios AC100',
  'yaris nsp151':'Yaris NSP151','yaris':'Yaris (other)','yaris gr':'GR Yaris','yaris cross ac200':'Yaris Cross AC200',
  'tank':'Tank','townace':'TownAce','sienta xp170':'Sienta XP170','ae101/111':'Corolla AE101/AE111',
  'alphard anh10/20/30':['Alphard ANH10','Alphard ANH20/30'],'alphard anh20/30':'Alphard ANH20/30','alphard agh40':'Alphard AGH40',
  'vellfire anh10/20/30|vellfire anh20/30':'Vellfire ANH20/30','estima acr30/50':'Estima ACR30/50',
  'camry acv30/40/50/70|camry acc30/40/50/70|camry avc 30/40/50/70|camry avc30/40/50/70':'Camry ACV30/40/50/70',
  'voxy z80|voxy':'Voxy R80','harrier xu50':'Harrier XU50','harrier xu60':'Harrier XU60','harrier xu80':'Harrier XU80',
  'mark x grx120':'Mark X GRX120','mark x grx130|mark x 09':'Mark X GRX130','caldina':'Caldina','wish':'Wish','mr2 sw20':'MR2 SW20',
  'ft86':'FT86','gr86':'GR86','altis 03':'Corolla Altis (2003)','altis 08':'Corolla Altis (2008)','altis 15':'Corolla Altis (2015)',
  'innova 04-14':'Innova (2004–2014)','corolla cross':'Corolla Cross','chr':'C-HR','fj cruiser':'FJ Cruiser','hilux':'Hilux','fortuner':'Fortuner'}),
 ...a('Perodua',{'myvi g1/g2':'Myvi Gen 1/2','myvi g3':'Myvi Gen 3','bezza':'Bezza','axia':'Axia','kenari':'Kenari','kelisa':'Kelisa','viva':'Viva','alza':'Alza','ativa':'Ativa','aruz':'Aruz'}),
 ...a('Proton',{
  'wira':'Wira','saga blm':'Saga BLM','saga vvt':'Saga VVT','persona':'Persona','persona bh vvt|persona bh':'Persona BH VVT','gen2':'Gen-2',
  'satria neo':'Satria Neo','waja':'Waja','iriz':'Iriz','preve':'Preve','suprima':'Suprima S',
  'x70':['X70 CKD','X70 CBU'],'x70 ckd':'X70 CKD','x70 cbu':'X70 CBU','x50':'X50','s70':'S70','inspira':'Inspira'}),
 ...a('Nissan',{'almera n17':'Almera N17','almera n18':'Almera N18','ad resort':'AD Resort','grand livina':'Grand Livina','serena c26':'Serena C26','serena c27':'Serena C27',
  'sentra n16':'Sentra N16','sentra b15':'Sentra B15','teana':'Teana','sylphy b17':'Sylphy B17','latio':'Latio','navara np300':'Navara NP300','fairlady 350z':'Fairlady 350Z','xtrail t32':'X-Trail T32'}),
 ...a('Mazda',{'mx5 2015|mx5 nd 2015|mx5 nd':'MX-5 ND','mx5 nc':'MX-5 NC','2 dj':'Mazda2 DJ','3 bm':'Mazda3 BM','3 bp':'Mazda3 BP','6 gj':'Mazda6 GJ',
  'cx5 ke':'CX-5 KE','cx5 kf':'CX-5 KF','cx3':'CX-3','cx30':'CX-30','rx8':'RX-8'}),
 ...a('Suzuki',{'swift zc81':'Swift ZC81','swift zc82':'Swift ZC82','swift zc83':'Swift ZC83','swift zc31':'Swift ZC31','swift zc32':'Swift ZC32','swift zc33':'Swift ZC33'}),
 ...a('Ford',{'fiesta 08':'Fiesta (2008)','mondeo 15':'Mondeo (2015)','focus 16':'Focus (2016)','mustang':'Mustang','ranger':'Ranger','ranger raptor':'Ranger Raptor'}),
 ...a('Mitsubishi',{'lancer gt':'Lancer GT','galant 99-04':'Galant (1999–2004)','fto':'FTO','colt':'Colt','grandis':'Grandis','xpander':'Xpander','evo 3':'Lancer Evolution III','triton 2019':'Triton (2019)','triton 2022':'Triton (2022)'}),
 ...a('Hyundai',{'elantra md':'Elantra MD','elantra ad':'Elantra AD','veloster':'Veloster','santa fe 14-19':'Santa Fe (2014–2019)'}),
 ...a('Volkswagen',{'polo gti':'Polo GTI','jetta':'Jetta','golf mk5/6/7':['Golf Mk5','Golf Mk6','Golf Mk7'],'golf mk5/6/7/8':['Golf Mk5','Golf Mk6','Golf Mk7','Golf Mk8'],
  'tigguan':'Tiguan','scirocco|scirroco':'Scirocco','passat':'Passat','arteon':'Arteon','sharan':'Sharan'}),
 ...a('BMW',{'e36':'3 Series E36','e46':'3 Series E46','e90':'3 Series E90','f30':'3 Series F30','g20':'3 Series G20','e60':'5 Series E60','f10':'5 Series F10','g30':'5 Series G30',
  'e60/63/64':['5 Series E60','6 Series E63','6 Series E64'],'g30/20':['5 Series G30','3 Series G20']}),
 ...a('Subaru',{'brz':'BRZ','xv1':'XV (1st gen)','xv2':'XV (2nd gen)','levorg':'Levorg'}),
 ...a('MINI',{'cooper r56':'Cooper R56','cooper f55/56|cooper f56/55':'Cooper F55/F56','cooper clubman r60':'Cooper Clubman R60'}),
 ...a('Kia',{'cerato k3':'Cerato K3','forte':'Forte','optima k5':'Optima K5','carnival 2020':'Carnival (2020)'}),
 ...a('Audi',{'a3':'A3','a4 b8':'A4 B8','a4 b9':'A4 B9','a5':'A5','a6':'A6'}),
 ...a('Mercedes-Benz',{'w204':'C-Class W204','w176':'A-Class W176','w177':'A-Class W177','w117':'CLA W117'}),
 ...a('Volvo',{'xc60':'XC60'}),
 ...a('WEY',{'tank 300':'Tank 300'}),
 ...a('Lexus',{'nx':'NX','rx':'RX','is':'IS'})
};

// Parse the client lists into [{kit, brand, models}] and report anything unmapped.
export function parseKits() {
 const unmapped = [];
 const index = {}; // brand -> model -> Set(kit id)
 for (const kit of kits) {
  let brand = null;
  for (const raw of kit.list.split('\n').map(l => l.trim()).filter(Boolean)) {
   const header = raw.match(/^\((.+)\)$/);
   if (header) { brand = brandAliases[header[1].toUpperCase()] ?? null; if (!brand) unmapped.push(`${kit.id}: brand ${raw}`); continue; }
   const key = `${brand}|${raw.toLowerCase().replace(/\s+/g, ' ')}`;
   const models = aliases[key];
   if (!models) { unmapped.push(`${kit.id}: ${key}`); continue; }
   for (const m of models) ((index[brand] ??= {})[m] ??= new Set()).add(kit.id);
  }
 }
 return {index, unmapped};
}

const {index} = parseKits();
const collator = new Intl.Collator('en', {numeric: true});
const sortKeys = o => Object.keys(o).sort(collator.compare);
// brand -> model -> [kit ids], alphabetical for the selects.
export const fitments = Object.fromEntries(sortKeys(index).map(b => [b, Object.fromEntries(sortKeys(index[b]).map(m => [m, [...index[b][m]]]))]));
export const kitById = Object.fromEntries(kits.map(k => [k.id, k]));
export const rimSizes = [14, 15, 16, 17, 18, 19, 20, 21, 22];
