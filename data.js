// Helper to generate Sinhala sounding names for placeholders
const firstNamesM = ["කමල්", "නිමල්", "සුනිල්", "සමන්", "අමිල", "කසුන්", "ගයාන්", "දිනේෂ්", "තරිඳු", "ප්‍රසාද්"];
const firstNamesF = ["නිල්මිණි", "සුදර්ශනී", "චාමරී", "තිළිණි", "ගයනි", "ප්‍රියන්ති", "අමාලි", "කෞෂල්‍යා", "හංසමාලි", "දිල්රුක්ෂි"];
const lastNames = ["පෙරේරා", "සිල්වා", "ප්‍රනාන්දු", "ගුණවර්ධන", "රත්නායක", "දිසානායක", "විජේසිංහ", "සමරවීර", "ජයසූරිය", "කරුණාරත්න"];

function generateStudents(count) {
    let students = [];
    for (let i = 1; i <= count; i++) {
        let isMale = Math.random() > 0.5;
        let fn = isMale ? firstNamesM[Math.floor(Math.random() * firstNamesM.length)] : firstNamesF[Math.floor(Math.random() * firstNamesF.length)];
        let ln = lastNames[Math.floor(Math.random() * lastNames.length)];
        let grade = Math.floor(Math.random() * 11) + 1; // 1 to 11
        let isPresent = Math.random() > 0.1; // 90% chance present
        
        students.push({
            id: String(i).padStart(3, '0'),
            name: `${fn} ${ln}`,
            gender: isMale ? "පිරිමි" : "ගැහැණු",
            grade: grade,
            present: isPresent
        });
    }
    return students;
}

const siteData = {
    // 1. Administration
    administration: {
        principal: {
            name: "පූජ්‍ය දම්මිත හිමි",
            role: "ප්‍රධාන ආචාර්ය",
            duties: "දහම්පාසලේ සමස්ත පාලනය, ගුරු මණ්ඩලයේ රාජකාරි අධීක්ෂණය සහ ආගමික කටයුතු මෙහෙයවීම."
        },
        vicePrincipal: {
            name: "එන්. ඩී. ගුණසේකර මයා",
            role: "උප ප්‍රධාන ආචාර්ය",
            duties: "ප්‍රධාන ආචාර්යතුමාට සහය වීම, ශිෂ්‍ය විනය පාලනය සහ පරිපාලන කටයුතු සංවිධානය."
        }
    },

    // 2. Teachers (20 names)
    teachers: [
        { id: 1, name: "රේණුකා ප්‍රියදර්ශනී මිය", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 1 },
        { id: 2, name: "කමනි වීරසිංහ මිය", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 2 },
        { id: 3, name: "සරත් රණවීර මයා", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 3 },
        { id: 4, name: "ගීතා කුරේ මිය", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 4 },
        { id: 5, name: "සුනිල් ශාන්ත මයා", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 5 },
        { id: 6, name: "අමරා හේරත් මිය", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 6 },
        { id: 7, name: "ජගත් කුමාර මයා", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 7 },
        { id: 8, name: "සුජාතා පීරිස් මිය", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 8 },
        { id: 9, name: "පියදාස පෙරේරා මයා", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 9 },
        { id: 10, name: "නයනා ද සිල්වා මිය", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 10 },
        { id: 11, name: "උපාලි බණ්ඩාර මයා", subject: "දහම් පාසල් ගුරු", isClassTeacher: true, grade: 11 },
        { id: 12, name: "චමින්ද දිසානායක මයා", subject: "පාලි භාෂාව", isClassTeacher: false },
        { id: 13, name: "තුෂාරි රත්නායක මිය", subject: "අභිධර්මය", isClassTeacher: false },
        { id: 14, name: "නිහාල් ජයසිංහ මයා", subject: "ශිෂ්‍ය නායක භාර ආචාර්ය", isClassTeacher: false },
        { id: 15, name: "එස්. එම්. සමරකෝන් මයා", subject: "විනය භාර", isClassTeacher: false },
        { id: 16, name: "දීපිකා ප්‍රියදර්ශනී මිය", subject: "දහම් පාසල් ගුරු", isClassTeacher: false },
        { id: 17, name: "රුවන් පතිරණ මයා", subject: "දහම් පාසල් ගුරු", isClassTeacher: false },
        { id: 18, name: "ගයාන් මුණසිංහ මයා", subject: "දහම් පාසල් ගුරු", isClassTeacher: false },
        { id: 19, name: "ආරියවතී මැණිකේ මිය", subject: "දහම් පාසල් ගුරු", isClassTeacher: false },
        { id: 20, name: "සුදත් ප්‍රනාන්දු මයා", subject: "දහම් පාසල් ගුරු", isClassTeacher: false }
    ],

    // 3. Student Leaders (25 names)
    leadersTeacher: "නිහාල් ජයසිංහ මයා - ශිෂ්‍ය නායක භාර ආචාර්ය",
    leaderDuties: [
        { title: "ප්‍රධාන ශිෂ්‍ය නායක/නායිකාව", desc: "මුළු පාසලේම විනය සහ පාලනය, උදෑසන රැස්වීම මෙහෙයවීම." },
        { title: "උප ප්‍රධාන ශිෂ්‍ය නායක", desc: "ප්‍රධාන නායකයාට සහය වීම, ප්‍රධාන නායක නොමැති විට රාජකාරි ඉටුකිරීම." },
        { title: "සහකාර ශිෂ්‍ය නායකින්", desc: "පන්ති මට්ටමින් සහ ආගමික කටයුතුවලදී විනය පවත්වා ගැනීම." }
    ],
    leaders: [
        { id: "L01", name: "කවිඳු ලක්ෂාන්", role: "ප්‍රධාන ශිෂ්‍ය නායක", present: true },
        { id: "L02", name: "හංසිනි දිල්හාරා", role: "ප්‍රධාන ශිෂ්‍ය නායිකා", present: true },
        { id: "L03", name: "දිලුම් තාරක", role: "උප ප්‍රධාන ශිෂ්‍ය නායක", present: true },
        { id: "L04", name: "කවිෂා සඳමිණි", role: "උප ප්‍රධාන ශිෂ්‍ය නායිකා", present: false },
        // Generating remaining 21 assistant leaders
        ...Array.from({length: 21}, (_, i) => ({
            id: `L${String(i+5).padStart(2,'0')}`,
            name: `${firstNamesM[i%10]} ${lastNames[i%10]}`,
            role: "සහකාර ශිෂ්‍ය නායක/නායිකා",
            present: Math.random() > 0.05
        }))
    ],

    // 4. Students (350 Count)
    students: generateStudents(350),

    // 5. Flower Offerings
    flowers: [
        { name: "නිමන්ත ප්‍රනාන්දු", date: "2026-02-22", marks: 95 },
        { name: "දසුනි චමෝද්‍යා", date: "2026-02-22", marks: 98 },
        { name: "පසිඳු ගිම්හාන්", date: "2026-02-22", marks: 92 },
        { name: "සඳුනි පබසරා", date: "2026-02-22", marks: 88 },
        { name: "අචින්ත මේදිත්", date: "2026-02-22", marks: 96 }
    ],

    // 6. Poya Day Puaja Participants
    poyaPuja: [
        "අමායා සෙව්වන්දි (9 වසර)", "රුවන්දිකා පීරිස් (10 වසර)", "කමල් සම්පත් (8 වසර)", "තිසර නුවන් (11 වසර)", 
        "සහන් තරංග (7 වසර)", "දිල්ෂාන් මධුෂංක (10 වසර)", "මාලක ප්‍රසාද් (9 වසර)", "දිනිති හංසිකා (8 වසර)"
    ],

    // 7. Committees
    committees: {
        events: [
            "සභාපති: නිහාල් ජයසිංහ මයා",
            "ලේකම්: ගීතා කුරේ මිය",
            "භාණ්ඩාගාරික: සුනිල් ශාන්ත මයා",
            ...lastNames.slice(0, 4).map(ln => `සාමාජික: ${firstNamesM[0]} ${ln}`)
        ],
        development: [
            "සභාපති: ප්‍රධාන ආචාර්ය හිමි",
            "ලේකම්: එන්. ඩී. ගුණසේකර මයා",
            ...lastNames.slice(4, 9).map(ln => `සාමාජික: ${firstNamesM[1]} ${ln}`)
        ],
        ymba: [
            { pos: "සභාපති", name: "ඩී. බී. රත්නායක මයා" },
            { pos: "උප සභාපති", name: "සිරිල් ප්‍රනාන්දු මයා" },
            { pos: "ලේකම්", name: "බන්දුල ගුණවර්ධන මයා" },
            { pos: "උප ලේකම්", name: "ජයන්ත ද සිල්වා මයා" },
            { pos: "භාණ්ඩාගාරික", name: "අමරදාස පෙරේරා මයා" },
            { pos: "කාරක සභික 1", name: "සුනිල් හේමචන්ද්‍ර මයා" },
            { pos: "කාරක සභික 2", name: "කරුණාදාස ජයසිංහ මයා" },
            { pos: "කාරක සභික 3", name: "නිමල් දිසානායක මයා" },
            { pos: "කාරක සභික 4", name: "සරත් වීරසිංහ මයා" },
            { pos: "කාරක සභික 5", name: "ආනන්ද කුමාර මයා" },
            { pos: "කාරක සභික 6", name: "වීරසේන පතිරණ මයා" }
        ]
    },

    // 8. Achievements Data
    achievements: {
        highestFlower: "දසුනි චමෝද්‍යා (10 වසර) - ලකුණු 98",
        bestDisciplinedMan: "කවිඳු ලක්ෂාන් (11 වසර)",
        bestDisciplinedWoman: "හංසිනි දිල්හාරා (11 වසර)",
        highestAttendance: "දිලුම් තාරක (10 වසර)",
        topClassStudents: [ // Generating top 3 for grades 1-11
            { grade: 1, first: "නිමල් පෙරේරා", second: "අමාලි සිල්වා", third: "කසුන් රත්නායක" },
            { grade: 2, first: "සුනිල් ප්‍රනාන්දු", second: "තිළිණි ගුණවර්ධන", third: "ගයාන් ද සිල්වා" },
            { grade: 3, first: "දිනේෂ් දිසානායක", second: "හංසමාලි විජේසිංහ", third: "තරිඳු සමරවීර" },
            { grade: 4, first: "අමිල ජයසූරිය", second: "දිල්රුක්ෂි කරුණාරත්න", third: "ප්‍රසාද් පෙරේරා" },
            { grade: 5, first: "කමල් සිල්වා", second: "සදමලි ප්‍රනාන්දු", third: "නුවන් රත්නායක" },
            { grade: 6, first: "චාමර ජයසිංහ", second: "ඉනෝකා ද සිල්වා", third: "රුවන් වීරසිංහ" },
            { grade: 7, first: "ගයාන් දිසානායක", second: "මාලතී පෙරේරා", third: "නිශාන්ත ප්‍රනාන්දු" },
            { grade: 8, first: "උදාර ජයවර්ධන", second: "සුභාෂිනී රත්නායක", third: "සමන්ත සමරවීර" },
            { grade: 9, first: "බන්දුල කුමාර", second: "නිල්මිණි පෙරේරා", third: "සුජිත් ප්‍රනාන්දු" },
            { grade: 10, first: "රොෂාන් සිල්වා", second: "ප්‍රියන්ති දිසානායක", third: "අසංක ජයවර්ධන" },
            { grade: 11, first: "කපිල රත්නායක", second: "චන්දිමා පෙරේරා", third: "ඉසුරු ද සිල්වා" }
        ]
    }
};
