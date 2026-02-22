document.addEventListener('DOMContentLoaded', () => {

    // Tab Switching Logic
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(n => n.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            item.classList.add('active');
            let targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Sub-tabs Logic
    const initTabs = (containerSelector) => {
        const tabs = document.querySelectorAll(`${containerSelector} .tab-btn`);
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const parentSection = tab.closest('section');
                parentSection.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                parentSection.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
            });
        });
    }

    initTabs('#teachers');
    initTabs('#leaders');
    initTabs('#religious');

    // Populate Data Structure
    populateAdmin();
    populateTeachers();
    populateLeaders();
    populateStudents();
    populateReligious();
    populateAchievements();
    populateCommittees();

    // Student Filter Logic
    const searchInput = document.getElementById('student-search');
    const gradeFilter = document.getElementById('grade-filter');

    [searchInput, gradeFilter].forEach(el => {
        el.addEventListener('input', updateStudentsTable);
    });

    // Populate Grades Dropdown
    for (let i = 1; i <= 11; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `${i} වෙනි ශ්‍රේණිය`;
        gradeFilter.appendChild(opt);
    }
});

// App Object for Inline Calls
window.app = {
    switchTab: function (targetId) {
        document.querySelector(`.nav-item[data-target="${targetId}"]`).click();
    }
};

// Data Population Functions
function populateAdmin() {
    let adminDiv = document.getElementById('admin-content');
    adminDiv.innerHTML = `
        <div class="grid-2-col">
            <div class="leader-duty-card">
                <h4>ප්‍රධාන ආචාර්ය</h4>
                <p class="text-xl mb-2 text-white"><strong>${siteData.administration.principal.name}</strong></p>
                <p>${siteData.administration.principal.duties}</p>
            </div>
            <div class="leader-duty-card">
                <h4>උප ප්‍රධාන ආචාර්ය</h4>
                <p class="text-xl mb-2 text-white"><strong>${siteData.administration.vicePrincipal.name}</strong></p>
                <p>${siteData.administration.vicePrincipal.duties}</p>
            </div>
        </div>
    `;
}

function populateTeachers() {
    let allBody = document.querySelector('#teachers-table tbody');
    let classBody = document.querySelector('#class-teachers-table tbody');
    let specialContent = document.getElementById('special-teachers-content');

    allBody.innerHTML = '';
    classBody.innerHTML = '';
    specialContent.innerHTML = '';

    // Sort by class grade if available, then by name
    let allTeachers = siteData.teachers.sort((a, b) => (a.grade || 99) - (b.grade || 99));

    allTeachers.forEach((t, index) => {
        let isClass = t.isClassTeacher ? `${t.grade} ශ්‍රේණිය පන්තිභාර` : t.subject;
        allBody.innerHTML += `<tr><td>${index + 1}</td><td>${t.name}</td><td>${isClass}</td></tr>`;

        if (t.isClassTeacher) {
            classBody.innerHTML += `<tr><td>${t.grade} ශ්‍රේණිය</td><td>${t.name}</td></tr>`;
        } else {
            specialContent.innerHTML += `
                <div class="st-card">
                    <h3>${t.subject} භාර ආචාර්ය</h3>
                    <p><strong>${t.name}</strong></p>
                </div>
            `;
        }
    });
}

function populateLeaders() {
    document.getElementById('leader-teacher-content').innerHTML = `
        <h3 class="mb-2 text-primary"><i class="fa-solid fa-person-chalkboard"></i> ශිෂ්‍ය නායකත්ව භාර ආචාර්ය</h3>
        <p class="text-lg">${siteData.leadersTeacher}</p>
    `;

    let lList = document.querySelector('#leaders-table tbody');
    let lAtt = document.querySelector('#leaders-attendance-table tbody');

    lList.innerHTML = '';
    lAtt.innerHTML = '';

    siteData.leaders.forEach((l, idx) => {
        lList.innerHTML += `<tr><td>${idx + 1}</td><td>${l.name}</td><td>${l.role}</td></tr>`;

        let status = l.present ? '<span class="status-present">පැමිණ ඇත</span>' : '<span class="status-absent">නැත</span>';
        lAtt.innerHTML += `<tr><td>${l.name}</td><td>${l.role}</td><td>${status}</td></tr>`;
    });

    let dutiesDiv = document.getElementById('leaders-duties-content');
    dutiesDiv.innerHTML = siteData.leaderDuties.map(d => `
        <div class="leader-duty-card">
            <h4>${d.title}</h4>
            <p>${d.desc}</p>
        </div>
    `).join('');
}

function updateStudentsTable() {
    let search = document.getElementById('student-search').value.toLowerCase();
    let grade = document.getElementById('grade-filter').value;

    let filtered = siteData.students.filter(s => {
        let nameMatch = s.name.toLowerCase().includes(search);
        let gradeMatch = grade === 'all' || s.grade.toString() === grade;
        return nameMatch && gradeMatch;
    });

    let sBody = document.querySelector('#students-table tbody');
    sBody.innerHTML = filtered.map(s => {
        let status = s.present ? '<span class="status-present">පැමිණ ඇත</span>' : '<span class="status-absent">නැත</span>';
        return `<tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.grade} ශ්‍රේණිය</td>
            <td>${status}</td>
        </tr>`;
    }).join('');
}

function populateStudents() {
    updateStudentsTable();
}

function populateReligious() {
    let fwBody = document.querySelector('#flowers-table tbody');
    fwBody.innerHTML = siteData.flowers.map(f => `
        <tr><td>${f.name}</td><td>${f.date}</td><td><span class="badge" style="background:var(--primary);color:#fff">${f.marks}</span></td></tr>
    `).join('');

    let pList = document.getElementById('poya-list');
    pList.innerHTML = siteData.poyaPuja.map(p => `<li>${p}</li>`).join('');
}

function populateAchievements() {
    document.getElementById('highest-flower-winner').textContent = siteData.achievements.highestFlower;
    document.getElementById('best-disciplined-winner').innerHTML = `
        ${siteData.achievements.bestDisciplinedMan}<br>
        <span style="font-size:1.2rem;opacity:0.8">${siteData.achievements.bestDisciplinedWoman}</span>
    `;
    document.getElementById('highest-attendance-winner').textContent = siteData.achievements.highestAttendance;

    let clsBody = document.querySelector('#top-students-table tbody');
    clsBody.innerHTML = siteData.achievements.topClassStudents.map(c => `
        <tr>
            <td>${c.grade} වසර</td>
            <td><strong style="color:var(--accent)">1.</strong> ${c.first}</td>
            <td><strong>2.</strong> ${c.second}</td>
            <td><strong>3.</strong> ${c.third}</td>
        </tr>
    `).join('');
}

function populateCommittees() {
    document.getElementById('event-committee').innerHTML = siteData.committees.events.map(c => `<li>${c}</li>`).join('');
    document.getElementById('dev-committee').innerHTML = siteData.committees.development.map(c => `<li>${c}</li>`).join('');

    let ymbaItems = siteData.committees.ymba.map(y => `
        <div class="ymba-card">
            <h4>${y.pos}</h4>
            <p>${y.name}</p>
        </div>
    `).join('');
    document.getElementById('ymba-committee').innerHTML = ymbaItems;
}
