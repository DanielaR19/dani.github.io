/* ----- Scritp to custom template ----- */

try {
    customNavElements();
    createModalTools();
} catch (error) { console.error('Error: could not execute functions'); }

let stateCheck = setInterval(() => {// Check document ready
    if (document.readyState === 'complete') {
        customMainPageElements();
        customFooterElements();
        addListenerToRs();
        clearInterval(stateCheck);
    }
}, 100);

function customNavElements() {
    /* ----- Delete nav links don't use ----- */
    const LI_HOME = document.querySelector('nav li[data-key="home"]');
    const LI_MY_HOME = document.querySelector('nav li[data-key="myhome"]');
    const LI_MY_COURSES = document.querySelector('nav li[data-key="mycourses"]');
    const LI_ADMIN = document.querySelector('nav .moremenu > ul > li[data-key="siteadminnode"]');
    const DIV_MSG = document.querySelector('.popover-region[data-region="popover-region-messages"]');

    (LI_HOME) ? LI_HOME.classList.add('d-none') : console.error('Error: cannot add d-none to home'); // Is not 'remove()' function because 'first.js' error
    (LI_MY_HOME) ? LI_MY_HOME.classList.add('d-none') : console.error('Error: cannot add d-none to myhome'); // Is not 'remove()' function because 'first.js' error
    (LI_MY_COURSES) ? LI_MY_COURSES.classList.add('d-none') : console.error('Error: cannot add d-none to mycourses'); // Is not 'remove()' function because 'first.js' error
    (LI_ADMIN) ? LI_ADMIN.remove() : console.error('Error: cannot remove siteadminnode');
    (DIV_MSG) ? DIV_MSG.remove() : console.error('Error: cannot remove messages');
    /* ----- Delete nav links don't use ----- */

    /* ----- Button nav links (in mobile) ----- */
    const BTN_LINKS = document.querySelector('.navbar-toggler[data-target="theme_boost-drawers-primary"]');
    const DIV_SIDE_LINKS = document.querySelector('#theme_boost-drawers-primary');

    (BTN_LINKS) ? BTN_LINKS.remove() : console.error('Error: cannot remove btn links');
    (DIV_SIDE_LINKS) ? DIV_SIDE_LINKS.remove() : console.error('Error: cannot remove side links');
    /* ----- Button nav links (in mobile) ----- */

    /* ----- Hamburguer Icon ----- */
    const A_MENU = document.querySelector('.navbar > .container-fluid > .navbar-brand');
    const I_MENU = document.createElement('i');

    if (A_MENU) {
        A_MENU.removeAttribute('href');
        A_MENU.text = '';

        /* ----- Add attributes to toggle sidebar ----- */
        A_MENU.setAttribute('data-toggler', 'drawers');
        A_MENU.setAttribute('data-action', 'toggle');
        A_MENU.setAttribute('data-target', 'theme_boost-drawers-courseindex');
        A_MENU.setAttribute('data-toggle', 'tooltip');
        A_MENU.setAttribute('data-placement', 'right');
        /* ----- Add attributes to toggle sidebar ----- */

        I_MENU.className = 'fa fa-bars menu-icon';
        A_MENU.appendChild(I_MENU); // Add menu icon

    } else { console.error('Error: cannot create hamburguer menu'); }
    /* ----- Hamburguer Icon ----- */

    /* ----- Technology tools links (Herramientas tecnolÃ³gicas recursos) ----- */
    const DIV_USERNAV = document.querySelector('.navbar > .container-fluid > #usernavigation');
    const DIV_NOTIFIBOX = document.querySelector('.navbar > .container-fluid > #usernavigation > #nav-notification-popover-container');

    const DIV_TOOLS_BOX = document.createElement('div');
    const DIV_TOOLS = document.createElement('div');

    DIV_TOOLS_BOX.className = 'tools-box';
    DIV_TOOLS.className = 'icon tools-icon';
    DIV_TOOLS.addEventListener('click', (e) => { openModalAi(e, 'modal-tools'); });
    DIV_TOOLS_BOX.appendChild(DIV_TOOLS);

    (DIV_USERNAV && DIV_NOTIFIBOX) ? DIV_USERNAV.insertBefore(DIV_TOOLS_BOX, DIV_NOTIFIBOX) : console.error('Error: cannot insert tools box');
    /* ----- Technology tools links (Herramientas tecnolÃ³gicas recursos) ----- */

    /* ----- Nav link (Notificaciones) ----- */
    const I_NOTIFI = document.querySelector('.popover-region-notifications > div[data-region="popover-region-toggle"] > i');
    (I_NOTIFI) ? I_NOTIFI.classList.replace('fa-bell-o', 'fa-bell') : console.error('Error: cannot replace notifications fill icon');
    /* ----- Nav link (Notificaciones) ----- */

    /* ----- Nav link (Logo) ----- */
    const DIV_LOGO = document.querySelector('.navbar-nav .usermenu-container[data-region="usermenu"]');

    const A_LOGO = document.createElement('a');
    A_LOGO.className = 'logo-icon';
    (BASEURL) ? A_LOGO.href = BASEURL : console.error('Error: BASEURL const could not be found');

    (DIV_LOGO) ? DIV_LOGO.classList.replace('align-items-stretch', 'align-items-center') : console.error('Error: cannot replace usermenu-container style');
    (DIV_LOGO) ? DIV_LOGO.appendChild(A_LOGO) : console.error('Error: cannot append logo');
    /* ----- Nav link (Logo) ----- */
}

function customMainPageElements() {
    /* ----- Header Page Navbar ----- */
    const DIV_NAVBAR = document.querySelector('header #page-navbar');
    (DIV_NAVBAR) ? DIV_NAVBAR.remove() : console.error('Error: cannot remove page-navbar'); // Is display none in style.css
    /* ----- Header Page Navbar ----- */
}

function customFooterElements() {
    // Is footer display none in style.css

    /* ----- Footer Links Section 1 ----- */
    const DIV_FOOTER_SECTION1 = document.querySelector('footer > .footer-content-popover > .footer-section:first-child');
    (DIV_FOOTER_SECTION1) ? DIV_FOOTER_SECTION1.remove() : console.error('Error: cannot remove footer section 1');
    /* ----- Footer Links Section 1 ----- */

    /* ----- Footer Links Section 2 ----- */
    const DIV_FOOTER_SECTION2 = document.querySelector('footer > .footer-content-popover > .footer-section:last-child');
    (DIV_FOOTER_SECTION2) ? DIV_FOOTER_SECTION2.remove() : console.error('Error: cannot remove footer section 2');
    /* ----- Footer Links Section 2 ----- */

    /* ----- Footer Bg ----- */
    const FOOTER_BOX = document.querySelector('footer#page-footer');
    (FOOTER_BOX) ? FOOTER_BOX.classList.remove('bg-white') : console.error('Error: cannot remove page-footer');
    /* ----- Footer Bg ----- */

    /* ----- Footer Popover Button ----- */
    const BTN_FOOTER_POPOVER = document.querySelector('footer div[data-region="footer-container-popover"]');
    (BTN_FOOTER_POPOVER) ? BTN_FOOTER_POPOVER.remove() : console.error('Error: cannot remove footer popover'); // Is display none in style.css
    /* ----- Footer Popover Button ----- */
}

function createModalTools() {
    let langIndex = 0;
    if (COURSE_LANG == 'en') langIndex = 1; // Select course language

    let toolsResources = [
        ['Herramientas tecnolÃ³gicas', 'Technological tools'],
        {
            title: ['Herramientas tecnolÃ³gicas', 'Technological tools'],
            resources: [
                {
                    name: 'Google Docs',
                    desc: [
                        'Herramienta de procesamiento de texto en lÃ­nea para la creaciÃ³n y ediciÃ³n colaborativa de documentos.',
                        'Online text processing tool for collaborative creation and editing of documents.'
                    ],
                    url: 'https://docs.google.com/document/'
                },
                {
                    name: 'Google Sheets',
                    desc: [
                        'AplicaciÃ³n de hojas de cÃ¡lculo en lÃ­nea para anÃ¡lisis y visualizaciÃ³n de datos de forma colaborativa.',
                        'Online spreadsheet application for collaborative analysis and data visualization.'
                    ],
                    url: 'https://docs.google.com/spreadsheets/'
                },
                {
                    name: 'Google Slides',
                    desc: [
                        'Plataforma en lÃ­nea para la creaciÃ³n, ediciÃ³n y presentaciÃ³n de diapositivas de manera colaborativa.',
                        'Online platform for collaborative creation, editing, and presentation of slides.'
                    ],
                    url: 'https://docs.google.com/presentation/'
                },
                {
                    name: 'Google Drive',
                    desc: [
                        'Servicio de almacenamiento en la nube para guardar y compartir archivos y carpetas.',
                        'Cloud-based storage service for saving and sharing files and folders.'
                    ],
                    url: 'https://drive.google.com/'
                },
                {
                    name: 'Google Forms',
                    desc: [
                        'Herramienta en lÃ­nea para la creaciÃ³n de encuestas y formularios, facilitando la recopilaciÃ³n y anÃ¡lisis de datos.',
                        'Online tool for creating surveys and forms, facilitating data collection and analysis.'
                    ],
                    url: 'https://docs.google.com/forms/'
                },
                {
                    name: 'Google Calendar',
                    desc: [
                        'Calendario digital para la gestiÃ³n y planificaciÃ³n de eventos y tareas personales o en grupo.',
                        'Digital calendar for managing and planning personal or group events and tasks.'
                    ],
                    url: 'https://calendar.google.com/calendar/'
                },
                {
                    name: 'Google Keep',
                    desc: [
                        'AplicaciÃ³n de notas y listas de tareas para la organizaciÃ³n personal o en equipo.',
                        'Notes and to-do list application for personal or team organization.'
                    ],
                    url: 'https://keep.google.com/'
                },
                {
                    name: 'Google Meet',
                    desc: [
                        'Plataforma de videollamadas y reuniones en lÃ­nea para comunicaciÃ³n y colaboraciÃ³n remota.',
                        'Online video call and meeting platform for remote communication and collaboration.'
                    ],
                    url: 'https://meet.google.com/'
                },
                {
                    name: 'Google Colab',
                    desc: [
                        'Entorno de Jupyter Notebook en la nube para programaciÃ³n en Python con Ã©nfasis en machine learning y anÃ¡lisis de datos.',
                        'Cloud-based Jupyter Notebook environment for Python programming with a focus on machine learning and data analysis.'
                    ],
                    url: 'https://colab.google/'
                },
                {
                    name: 'Microsoft 365 for Education',
                    desc: [
                        'Conjunto integrado de aplicaciones y herramientas de productividad y colaboraciÃ³n, con una licencia A1.',
                        'Integrated suite of productivity and collaboration applications and tools, with an A1 license.'
                    ],
                    url: 'https://www.microsoft.com/es-xl/education/products/office'
                },
                {
                    name: 'Microsoft Word',
                    desc: [
                        'Procesador de texto para la creaciÃ³n y ediciÃ³n de documentos con diversas herramientas de formato.',
                        'Word processor for creating and editing documents with various formatting tools.'
                    ],
                    url: 'https://www.microsoft365.com/launch/word'
                },
                {
                    name: 'Microsoft PowerPoint',
                    desc: [
                        'Software para la creaciÃ³n de presentaciones con diapositivas, incluyendo herramientas multimedia y de diseÃ±o.',
                        'Software for creating slide presentations, including multimedia and design tools.'
                    ],
                    url: 'https://www.microsoft365.com/launch/powerpoint'
                },
                {
                    name: 'Microsoft Excel',
                    desc: [
                        'Programa de hojas de cÃ¡lculo para anÃ¡lisis de datos, contabilidad y visualizaciÃ³n de informaciÃ³n.',
                        'Spreadsheet program for data analysis, accounting, and information visualization.'
                    ],
                    url: 'https://www.microsoft365.com/launch/excel'
                },
                {
                    name: 'Microsoft OneDrive',
                    desc: [
                        'Servicio de almacenamiento en la nube para acceder, compartir y colaborar en archivos desde cualquier lugar.',
                        'Cloud-based storage service to access, share, and collaborate on files from anywhere.'
                    ],
                    url: 'https://www.microsoft.com/es-mx/microsoft-365/onedrive/online-cloud-storage'
                },
                {
                    name: 'Microsoft Forms',
                    desc: [
                        'Herramienta para la creaciÃ³n de encuestas, cuestionarios y formularios, permitiendo la recolecciÃ³n de feedback y datos.',
                        'Tool for creating surveys, quizzes, and forms, allowing for feedback and data collection.'
                    ],
                    url: 'https://forms.office.com/Pages/DesignPageV2.aspx'
                },
                {
                    name: 'Microsoft List',
                    desc: [
                        'Plataforma para la creaciÃ³n, comparticiÃ³n y gestiÃ³n de listas de tareas, proyectos e inventarios de manera colaborativa.',
                        'Platform for creating, sharing, and managing to-do lists, projects, and inventories collaboratively.'
                    ],
                    url: 'https://www.microsoft.com/es-mx/microsoft-365/microsoft-lists'
                },
                {
                    name: 'Microsoft Planner',
                    desc: [
                        'Herramienta de gestiÃ³n de proyectos para la planificaciÃ³n de tareas, asignaciÃ³n de roles y seguimiento del progreso.',
                        'Project management tool for task planning, role assignment, and progress tracking.'
                    ],
                    url: 'https://tasks.office.com/'
                },
                {
                    name: 'Microsoft Project',
                    desc: [
                        'Software de gestiÃ³n de proyectos para planificar, ejecutar y monitorear proyectos complejos.',
                        'Project management software to plan, execute, and monitor complex projects.'
                    ],
                    url: 'https://project.microsoft.com/'
                },
                {
                    name: 'Microsoft Visio',
                    desc: [
                        'AplicaciÃ³n para la creaciÃ³n de diagramas y flujogramas complejos, facilitando la visualizaciÃ³n de procesos.',
                        'Application for creating complex diagrams and flowcharts, facilitating process visualization.'
                    ],
                    url: 'https://www.microsoft365.com/launch/Visio'
                },
                {
                    name: 'Microsoft Whiteboard',
                    desc: [
                        'Pizarra digital colaborativa para el esbozo de ideas, planificaciÃ³n y trabajo en equipo en tiempo real.',
                        'Collaborative digital whiteboard for sketching ideas, planning, and teamwork in real time.'
                    ],
                    url: 'https://whiteboard.office.com/'
                },
                {
                    name: 'Microsoft Teams',
                    desc: [
                        'Plataforma de comunicaciÃ³n y colaboraciÃ³n en equipo, integrando chat, reuniones y herramientas de Office.',
                        'Team communication and collaboration platform, integrating chat, meetings, and Office tools.'
                    ],
                    url: 'https://teams.microsoft.com/v2/'
                },
                {
                    name: 'Microsoft Power BI',
                    desc: [
                        'Herramienta de anÃ¡lisis de negocios para visualizar datos y compartir insights en toda la organizaciÃ³n.',
                        'Business analysis tool for data visualization and sharing insights across the organization.'
                    ],
                    url: 'https://app.powerbi.com/'
                },
                {
                    name: 'Microsoft Stream',
                    desc: [
                        'Plataforma empresarial para compartir y gestionar videos, fomentando la comunicaciÃ³n y el aprendizaje organizacional.',
                        'Enterprise platform for sharing and managing videos, promoting communication and organizational learning.'
                    ],
                    url: 'https://www.microsoft365.com/launch/Stream/'
                },
                {
                    name: 'Figma',
                    desc: [
                        'Plataforma de diseÃ±o de interfaces y prototipado colaborativo en lÃ­nea para equipos de diseÃ±o y desarrollo.',
                        'Online collaborative interface design and prototyping platform for design and development teams.'
                    ],
                    url: 'https://www.figma.com/education/'
                },
                {
                    name: 'eViews',
                    desc: [
                        'Software especializado en anÃ¡lisis economÃ©trico y estadÃ­stico para la investigaciÃ³n y enseÃ±anza en economÃ­a.',
                        'Specialized software in econometric and statistical analysis for research and teaching in economics.'
                    ],
                    url: 'https://www.eviews.com/download/student12/'
                },
                {
                    name: 'ChatGPT',
                    desc: [
                        'Modelo de lenguaje 3.5 basado en inteligencia artificial para generar texto, responder preguntas y asistir en tareas especÃ­ficas.',
                        'AI-based language model 3.5 for generating text, answering questions, and assisting in specific tasks.'
                    ],
                    url: 'https://chat.openai.com/'
                },
                {
                    name: 'Google Gemini',
                    desc: [
                        'Herramienta de inteligencia artificial para anÃ¡lisis y optimizaciÃ³n de campaÃ±as publicitarias en Google.',
                        'AI tool for analysis and optimization of Google advertising campaigns.'
                    ],
                    url: 'https://gemini.google.com/app'
                },
                {
                    name: 'Microsoft Copilot',
                    desc: [
                        'Asistente de IA integrado en herramientas de Microsoft para automatizar tareas y generar contenido.',
                        'AI assistant integrated into Microsoft tools to automate tasks and generate content.'
                    ],
                    url: 'https://copilot.microsoft.com/'
                },
                {
                    name: 'Wooclap',
                    desc: [
                        'Plataforma interactiva para la participaciÃ³n estudiantil en tiempo real, mejorando el aprendizaje en aulas y eventos.',
                        'Interactive platform for real-time student participation, enhancing learning in classrooms and events.'
                    ],
                    url: 'https://www.wooclap.com/es/'
                },
                {
                    name: 'Canva Education',
                    desc: [
                        'Herramienta de diseÃ±o grÃ¡fico con recursos educativos para facilitar la creaciÃ³n de contenido visual en el aula.',
                        'Graphic design tool with educational resources to facilitate visual content creation in the classroom.'
                    ],
                    url: 'https://www.canva.com/es_mx/educacion/'
                },
                {
                    name: 'Notion Education',
                    desc: [
                        'Plataforma de organizaciÃ³n y gestiÃ³n de proyectos para estudiantes y educadores, centralizando recursos y colaboraciÃ³n.',
                        'Project organization and management platform for students and educators, centralizing resources and collaboration.'
                    ],
                    url: 'https://www.notion.so/es-es/product/notion-for-education'
                }
            ]
        },
        {
            title: ['Otros', 'Others'],
            resources: [
                {
                    name: 'Adobe Express',
                    desc: [
                        'Herramienta de diseÃ±o grÃ¡fico en lÃ­nea para crear rÃ¡pidamente contenidos visuales impactantes.',
                        'Online graphic design tool to quickly create visually impactful content.'
                    ],
                    url: 'https://express.adobe.com/'
                },
                {
                    name: 'Powtoon',
                    desc: [
                        'Plataforma para la creaciÃ³n de videos animados y presentaciones dinÃ¡micas sin necesidad de habilidades de diseÃ±o avanzadas.',
                        'Platform for creating animated videos and dynamic presentations without advanced design skills.'
                    ],
                    url: 'https://www.powtoon.com/'
                },
                {
                    name: 'RawShort',
                    desc: [
                        'Software para convertir texto en videos animados, facilitando la creaciÃ³n de contenido audiovisual educativo.',
                        'Software to convert text into animated videos, facilitating the creation of educational audiovisual content.'
                    ],
                    url: 'https://www.rawshorts.com/'
                },
                {
                    name: 'Visual Studio Code',
                    desc: [
                        'Editor de cÃ³digo fuente ligero pero potente, que soporta mÃºltiples lenguajes de programaciÃ³n y herramientas de desarrollo.',
                        'Lightweight yet powerful source code editor that supports multiple programming languages and development tools.'
                    ],
                    url: 'https://code.visualstudio.com/'
                },
                {
                    name: 'Bitbucket',
                    desc: [
                        'Servicio de alojamiento de proyectos que utiliza el sistema de control de versiones Git, con funcionalidades de colaboraciÃ³n en equipo.',
                        'Project hosting service that uses the Git version control system, with team collaboration functionalities.'
                    ],
                    url: 'https://bitbucket.org/'
                },
                {
                    name: 'Git',
                    desc: [
                        'Sistema de control de versiones distribuido para manejar eficientemente proyectos de cualquier tamaÃ±o con colaboraciÃ³n y seguimiento de cambios.',
                        'Distributed version control system to efficiently manage projects of any size with collaboration and change tracking.'
                    ],
                    url: 'https://git-scm.com/'
                },
                {
                    name: 'Anaconda',
                    desc: [
                        'Plataforma de ciencia de datos y machine learning en Python y R, que facilita la gestiÃ³n de paquetes y entornos de trabajo.',
                        'Data science and machine learning platform in Python and R, facilitating package and environment management.'
                    ],
                    url: 'https://www.anaconda.com/download'
                },
                {
                    name: 'Tableau Public',
                    desc: [
                        'Herramienta de visualizaciÃ³n de datos que permite crear y compartir interactivamente grÃ¡ficos y dashboards.',
                        'Data visualization tool that allows for the interactive creation and sharing of charts and dashboards.'
                    ],
                    url: 'https://public.tableau.com/app/discover'
                },
                {
                    name: 'Claude',
                    desc: [
                        'Asistente de inteligencia artificial para la generaciÃ³n de texto, con capacidades de comprensiÃ³n y creaciÃ³n de contenido.',
                        'AI assistant for text generation, with capabilities for understanding and creating content.'
                    ],
                    url: 'https://claude.ai/'
                },
                {
                    name: 'Perplexity',
                    desc: [
                        'Modelo de IA para la generaciÃ³n de texto y respuestas a preguntas, basado en comprensiÃ³n profunda del lenguaje.',
                        'AI model for text generation and question answering, based on deep language understanding.'
                    ],
                    url: 'https://www.perplexity.ai/'
                },
                {
                    name: 'Leonardo AI',
                    desc: [
                        'Plataforma de inteligencia artificial con herramientas para la creaciÃ³n y ediciÃ³n de contenido digital automatizado.',
                        'AI platform with tools for creating and editing automated digital content.'
                    ],
                    url: 'https://leonardo.ai/'
                },
                {
                    name: 'Firefly',
                    desc: [
                        'Herramienta educativa interactiva para la gestiÃ³n del aprendizaje, que promueve la colaboraciÃ³n entre estudiantes y profesores.',
                        'Interactive educational tool for learning management, promoting collaboration between students and teachers.'
                    ],
                    url: 'https://www.adobe.com/es/products/firefly.html'
                },
                {
                    name: 'Ideogram',
                    desc: [
                        'Sistema de inteligencia artificial capaz de crear texto coherente en las imÃ¡genes generadas a travÃ©s de las descripciones que le das.',
                        'AI system capable of creating coherent text in images generated from the descriptions users provide.'
                    ],
                    url: 'https://ideogram.ai/t/explore'
                },
                {
                    name: 'Humata',
                    desc: [
                        'Plataforma de anÃ¡lisis de texto basada en IA, que ofrece insights y comprensiÃ³n profunda de contenidos escritos.',
                        'AI-based text analysis platform, offering insights and deep understanding of written content.'
                    ],
                    url: 'https://www.humata.ai/'
                },
                {
                    name: 'ILY PDF',
                    desc: [
                        'Herramienta para la ediciÃ³n y manejo de archivos PDF, facilitando la conversiÃ³n, combinaciÃ³n y modificaciÃ³n de documentos.',
                        'Tool for editing and managing PDF files, facilitating conversion, combination, and modification of documents.'
                    ],
                    url: 'https://www.ilovepdf.com/es'
                },
                {
                    name: 'Small PDF',
                    desc: [
                        'SoluciÃ³n en lÃ­nea para la conversiÃ³n, compresiÃ³n y ediciÃ³n de archivos PDF, simplificando el manejo de documentos digitales.',
                        'Online solution for converting, compressing, and editing PDF files, simplifying digital document management.'
                    ],
                    url: 'https://smallpdf.com/es'
                },
                {
                    name: 'Genially',
                    desc: [
                        'Plataforma para la creaciÃ³n de contenidos interactivos y multimedia, como presentaciones, infografÃ­as y recursos educativos dinÃ¡micos.',
                        'Platform for creating interactive and multimedia content, such as presentations, infographics, and dynamic educational resources.'
                    ],
                    url: 'https://app.genial.ly/'
                }
            ]
        }
    ];

    /* ----- Create Modal Tools ----- */
    const DIV_MODAL_BOX = document.createElement('div');
    DIV_MODAL_BOX.className = 'modal fade custom-modal';
    DIV_MODAL_BOX.id = 'modal-tools';
    DIV_MODAL_BOX.setAttribute('tabindex', '-1');

    const DIV_MODAL_DIALOG = document.createElement('div');
    DIV_MODAL_DIALOG.className = 'modal-dialog modal-dialog-centered modal-xl';
    DIV_MODAL_BOX.appendChild(DIV_MODAL_DIALOG);

    const DIV_MODAL_CONTENT = document.createElement('div');
    DIV_MODAL_CONTENT.className = 'modal-content';
    DIV_MODAL_DIALOG.appendChild(DIV_MODAL_CONTENT);

    const DIV_MODAL_HEADER = document.createElement('div');
    DIV_MODAL_HEADER.className = 'modal-header';
    DIV_MODAL_CONTENT.appendChild(DIV_MODAL_HEADER);

    const DIV_MODAL_HEADER_BTN = document.createElement('button');
    DIV_MODAL_HEADER_BTN.setAttribute('type', 'button');
    DIV_MODAL_HEADER_BTN.className = 'close';
    DIV_MODAL_HEADER_BTN.setAttribute('data-dismiss', 'modal');
    DIV_MODAL_HEADER.appendChild(DIV_MODAL_HEADER_BTN);

    const DIV_MODAL_HEADER_BTN_ICON = document.createElement('div');
    DIV_MODAL_HEADER_BTN_ICON.className = 'custom-modal_icon';
    DIV_MODAL_HEADER_BTN.appendChild(DIV_MODAL_HEADER_BTN_ICON);

    const DIV_MODAL_BODY = document.createElement('div');
    DIV_MODAL_BODY.className = 'modal-body modal-body-tools';
    DIV_MODAL_CONTENT.appendChild(DIV_MODAL_BODY);
    /* ----- Create Modal Tools ----- */

    /* ----- Create Banner ----- */
    const DIV_BANNER = document.createElement('div');
    DIV_BANNER.className = 'tools-banner';
    DIV_MODAL_BODY.appendChild(DIV_BANNER);

    const H2_TITLE = document.createElement('h2');
    H2_TITLE.className = 'tools-title';
    H2_TITLE.textContent = toolsResources[0][langIndex];
    DIV_BANNER.appendChild(H2_TITLE);

    const DIV_BANNER_IMG = document.createElement('div');
    DIV_BANNER_IMG.className = 'tools-banner-img';
    DIV_BANNER.appendChild(DIV_BANNER_IMG);
    /* ----- Create Banner ----- */

    /* ----- Create Collapse Buttons ----- */
    const DIV_CUSTOM_BOX = document.createElement('div');
    DIV_CUSTOM_BOX.className = 'custom-box';

    const DIV_LO_BOX = document.createElement('div');
    DIV_LO_BOX.className = 'learning-box';
    DIV_CUSTOM_BOX.appendChild(DIV_LO_BOX);

    toolsResources.slice(1).forEach((el, index) => {
        const BTN_COLLAPSE = document.createElement('button');
        BTN_COLLAPSE.className = 'btn';
        BTN_COLLAPSE.setAttribute('data-toggle', 'collapse');
        BTN_COLLAPSE.setAttribute('href', '#tools-' + index.toString());
        BTN_COLLAPSE.textContent = el.title[langIndex];
        DIV_LO_BOX.appendChild(BTN_COLLAPSE);

        const DIV_COLLAPSE_BOX = document.createElement('div');
        DIV_COLLAPSE_BOX.className = 'collapse';
        DIV_COLLAPSE_BOX.id = 'tools-' + index.toString();
        DIV_LO_BOX.appendChild(DIV_COLLAPSE_BOX);

        const DIV_CARD_BOX = document.createElement('div');
        DIV_CARD_BOX.className = 'card card-body';
        DIV_COLLAPSE_BOX.appendChild(DIV_CARD_BOX);

        const DIV_RS_BOX = document.createElement('div');
        DIV_RS_BOX.className = 'resource-box';
        DIV_CARD_BOX.appendChild(DIV_RS_BOX);

        el.resources.forEach(e => {
            const DIV_RS_BOX_NAME = document.createElement('div');
            DIV_RS_BOX_NAME.className = 'resource-box_name';
            DIV_RS_BOX.appendChild(DIV_RS_BOX_NAME);

            const I_RS_BOX_ICON = document.createElement('i');
            I_RS_BOX_ICON.className = 'resource-box_name_icon';
            DIV_RS_BOX_NAME.appendChild(I_RS_BOX_ICON);

            const A_RS_BOX_LINK = document.createElement('a');
            A_RS_BOX_LINK.setAttribute('href', e.url);
            A_RS_BOX_LINK.setAttribute('target', '_blank');
            A_RS_BOX_LINK.textContent = e.name;
            DIV_RS_BOX_NAME.appendChild(A_RS_BOX_LINK);

            const P_RS_BOX_DESC = document.createElement('p');
            P_RS_BOX_DESC.textContent = e.desc[langIndex];
            DIV_RS_BOX.appendChild(P_RS_BOX_DESC);
        });
    });

    DIV_MODAL_BODY.appendChild(DIV_CUSTOM_BOX);
    /* ----- Create Collapse Buttons ----- */

    document.body.appendChild(DIV_MODAL_BOX); // Add modal to body
}

function openModalAi(e, modalId) {
    e.preventDefault(); // Prevent the link from updating the URL

    const MODAL_RS_ID = document.getElementById(modalId);
    (MODAL_RS_ID) ? $(MODAL_RS_ID).modal('show') : console.error('Error: modal could not be found'); // Modal show
}

function addListenerToRs() {
    const A_LINKS = document.querySelectorAll('.resource-box a:not([href])');
    (A_LINKS) ? A_LINKS.forEach(link => { link.addEventListener('click', (e) => { openModalRs(e) }); }) : console.error('Error: cannot addEventListener to resource-box');
}
/*-------Codigo modificado------*/
/*function openModalRs(e) {
    e.preventDefault(); // Prevent the link from updating the URL

    const URL_RS = e.target.getAttribute('data-url');
    const RS_TYPE = e.target.getAttribute('data-type');
    const MODAL_RS_ID = document.getElementById('modal-resource');
    const MODAL_RS_BODY_ID = document.getElementById('modal-resource-body');

    /*--- Create resource elements ---*/
/*    switch (RS_TYPE) {
        case 'iframe':
            const IFRAME_RS = e.target.getAttribute('iframe-rs');
            const IFRAME_ELEMENT = createIframeEl(IFRAME_RS, URL_RS);
            (MODAL_RS_BODY_ID) ? MODAL_RS_BODY_ID.appendChild(IFRAME_ELEMENT) : console.error('Error: cannot append to modal-resource-body');

            break;

        case 'img':
            const IMG_BOX = createImageEl(URL_RS);
            (MODAL_RS_BODY_ID) ? MODAL_RS_BODY_ID.appendChild(IMG_BOX) : console.error('Error: cannot append to modal-resource-body');

            break;

        case 'audio':
            const AUDIO_BOX = createAudioEl(URL_RS);
            (MODAL_RS_BODY_ID) ? MODAL_RS_BODY_ID.appendChild(AUDIO_BOX) : console.error('Error: cannot append to modal-resource-body');

            break;

        case 'video':
            const VIDEO_BOX = createVideoEl(URL_RS);
            (MODAL_RS_BODY_ID) ? MODAL_RS_BODY_ID.appendChild(VIDEO_BOX) : console.error('Error: cannot append to modal-resource-body');

            break;

        default:
            console.error('Error: rs-type could not be found');

            break;
    }

    /*--- Create resource elements ---*/
/*    if (MODAL_RS_ID) {
        /*$(MODAL_RS_ID).modal('show'); // Modal show */
/*        const modal = new bootstrap.Modal(MODAL_RS_ID);
        modal.show();


        $(MODAL_RS_ID).on('hidden.bs.modal', function (e) {
            /*const MODAL_RS_ELEMENT_ID = document.getElementById('rs-element');*/
/*            const modal = new bootstrap.Modal(document.getElementById('modal-resource'));
            if (MODAL_RS_ELEMENT_ID) MODAL_RS_BODY_ID.removeChild(MODAL_RS_ELEMENT_ID);
        });

    } else { console.error('Error: modal-resource could not be found'); }
}*/

/*(function(callback) {
    if (typeof window.jQuery === 'undefined') {
        console.warn('⚠️ jQuery no detectado, inyectando desde CDN...');

        var script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            console.log('✅ jQuery cargado desde CDN');
            callback(window.jQuery);
        };
        document.head.appendChild(script);
    } else {
        console.log('✅ jQuery ya está disponible');
        callback(window.jQuery);
    }
})(function($) {
    // Tu código aquí (puedes usar $ como jQuery sin problemas)

    function createIframeEl(id, url) {
        const iframe = document.createElement('iframe');
        iframe.id = 'rs-element';
        iframe.src = url;
        iframe.width = '100%';
        iframe.height = '400';
        iframe.frameBorder = '0';
        return iframe;
    }

    function createImageEl(url) {
        const img = document.createElement('img');
        img.id = 'rs-element';
        img.src = url;
        img.style.maxWidth = '100%';
        return img;
    }

    function createAudioEl(url) {
        const audio = document.createElement('audio');
        audio.id = 'rs-element';
        audio.controls = true;
        audio.src = url;
        return audio;
    }

    function createVideoEl(url) {
        const video = document.createElement('video');
        video.id = 'rs-element';
        video.controls = true;
        video.src = url;
        video.style.maxWidth = '100%';
        return video;
    }

    function openModalRs(e) {
        e.preventDefault();

        const URL_RS = e.currentTarget.getAttribute('data-url');
        const RS_TYPE = e.currentTarget.getAttribute('data-type');
        const MODAL_RS_ID = document.getElementById('modal-resource');
        const MODAL_RS_BODY_ID = document.getElementById('modal-resource-body');

        if (!MODAL_RS_BODY_ID || !MODAL_RS_ID) {
            console.error('❌ No se encontraron los elementos del modal');
            return;
        }

        let elementToAdd;

        switch (RS_TYPE) {
            case 'iframe':
                const iframeId = e.currentTarget.getAttribute('iframe-rs') || 'rs-iframe';
                elementToAdd = createIframeEl(iframeId, URL_RS);
                break;
            case 'img':
                elementToAdd = createImageEl(URL_RS);
                break;
            case 'audio':
                elementToAdd = createAudioEl(URL_RS);
                break;
            case 'video':
                elementToAdd = createVideoEl(URL_RS);
                break;
            default:
                console.error('❌ Tipo de recurso no reconocido');
                return;
        }

        MODAL_RS_BODY_ID.appendChild(elementToAdd);

        $(MODAL_RS_ID).modal('show');

        $(MODAL_RS_ID).on('hidden.bs.modal', function () {
            const MODAL_RS_ELEMENT_ID = document.getElementById('rs-element');
            if (MODAL_RS_ELEMENT_ID) {
                MODAL_RS_BODY_ID.removeChild(MODAL_RS_ELEMENT_ID);
            }
        });
    }

    $(document).ready(function() {
        $('[data-url][data-type]').each(function() {
            $(this).on('click', openModalRs);
        });

        console.log('✅ Listeners de modal inyectados');
    });
});


/*-----Codigo no cambiado -------*/
function createIframeEl(IFRAME_RS, URL_RS) {
    const DIV_IFRAME = document.createElement('div');
    const IFRAME_BOX = document.createElement('iframe');
    let iframeRsClass = '';

    /*--- Add iframe bootstrap responsive class ---*/
    if (IFRAME_RS == 'info' || IFRAME_RS == 'file' || IFRAME_RS == 'genially' || IFRAME_RS == 'instagram') {
        iframeRsClass = 'embed-responsive-1by1';

    } else if (IFRAME_RS == 'video') {
        iframeRsClass = 'embed-responsive-16by9';

    } else if (IFRAME_RS == 'audio') {
        iframeRsClass = 'embed-responsive-21by9';

    } else if (IFRAME_RS == 'tiktok') {
        iframeRsClass = 'embed-responsive-4by3';

    } else { // Default responsive class
        iframeRsClass = 'embed-responsive-4by3';
    }
    /*--- Add iframe bootstrap responsive class ---*/

    DIV_IFRAME.className = 'embed-responsive ' + iframeRsClass;
    DIV_IFRAME.id = 'rs-element';

    IFRAME_BOX.className = 'embed-responsive-item';
    IFRAME_BOX.src = URL_RS;

    DIV_IFRAME.appendChild(IFRAME_BOX);

    return DIV_IFRAME;
}

function createImageEl(URL_RS) {
    const IMG_BOX = document.createElement('img');

    IMG_BOX.className = 'img-fluid';
    IMG_BOX.src = URL_RS;
    IMG_BOX.id = 'rs-element';

    return IMG_BOX;
}

function createAudioEl(URL_RS) {
    const AUDIO_BOX = document.createElement('audio');
    const AUDIO_BOX_SRC = document.createElement('source');

    AUDIO_BOX.setAttribute('controls', 'controls');
    AUDIO_BOX.id = 'rs-element';
    AUDIO_BOX_SRC.src = URL_RS;

    AUDIO_BOX.appendChild(AUDIO_BOX_SRC);

    return AUDIO_BOX;
}

function createVideoEl(URL_RS) {
    const VIDEO_BOX = document.createElement('video');
    const VIDEO_BOX_SRC = document.createElement('source');

    VIDEO_BOX.setAttribute('controls', 'controls');
    VIDEO_BOX.id = 'rs-element';

    VIDEO_BOX_SRC.src = URL_RS;

    VIDEO_BOX.appendChild(VIDEO_BOX_SRC);

    return VIDEO_BOX;
}

(function initBootstrapModalSupport() {
  // Paso 1: Cargar Bootstrap si no está
  if (typeof bootstrap === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.onload = setupEventListeners;
    document.head.appendChild(script);
  } else {
    setupEventListeners();
  }

  // Paso 2: Cuando Bootstrap esté listo, activamos los eventos
  function setupEventListeners() {
    document.body.addEventListener('click', function (e) {
      const link = e.target.closest('a[data-url][data-type]');
      if (link) {
        e.preventDefault();
        openModalRs(link);
      }
    });
  }

  // Paso 3: Función para abrir el modal
  function openModalRs(link) {
    const URL_RS = link.getAttribute('data-url');
    const RS_TYPE = link.getAttribute('data-type');
    const MODAL_RS_ID = document.getElementById('modal-resource');
    const MODAL_RS_BODY_ID = document.getElementById('modal-resource-body');

    if (!MODAL_RS_ID || !MODAL_RS_BODY_ID) {
      console.error('No se encontró el modal en el DOM.');
      return;
    }

    // Limpia el contenido previo
    MODAL_RS_BODY_ID.innerHTML = '';

    switch (RS_TYPE) {
      case 'iframe':
        const iframe = document.createElement('iframe');
        iframe.src = URL_RS;
        iframe.width = '100%';
        iframe.height = '500';
        iframe.style.border = 'none';
        MODAL_RS_BODY_ID.appendChild(iframe);
        break;

      // Puedes agregar más tipos aquí: 'img', 'audio', etc.

      default:
        console.warn('Tipo de recurso no soportado:', RS_TYPE);
    }

    // Mostrar modal con Bootstrap
    const modal = new bootstrap.Modal(MODAL_RS_ID);
    modal.show();
  }
})();

(function ensureBootstrapAndInitModal() {
  function injectBootstrap(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.onload = callback;
    document.head.appendChild(script);
  }

  function setupModalHandler() {
    document.body.addEventListener('click', function (e) {
      const link = e.target.closest('a[data-url][data-type]');
      if (!link) return;

      e.preventDefault();

      const URL_RS = link.getAttribute('data-url');
      const RS_TYPE = link.getAttribute('data-type');
      const MODAL_RS = document.getElementById('modal-resource');
      const MODAL_BODY = document.getElementById('modal-resource-body');

      if (!MODAL_RS || !MODAL_BODY) return;

      // Limpia contenido anterior
      MODAL_BODY.innerHTML = '';

      if (RS_TYPE === 'iframe') {
        const iframe = document.createElement('iframe');
        iframe.src = URL_RS;
        iframe.width = '100%';
        iframe.height = '500';
        iframe.style.border = 'none';
        MODAL_BODY.appendChild(iframe);
      }

      // Abre el modal
      const modal = new bootstrap.Modal(MODAL_RS);
      modal.show();
    });
  }

  // Solo inyectamos si no existe
  if (typeof bootstrap === 'undefined') {
    injectBootstrap(setupModalHandler);
  } else {
    setupModalHandler();
  }
})();
