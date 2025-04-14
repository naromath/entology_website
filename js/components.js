/**
 * Component Loader Script
 * Loads HTML components into their respective containers
 */

// Components configuration
const components = [
    {
        id: 'header-container',
        path: 'components/header.html'
    },
    {
        id: 'hero-container',
        path: 'components/hero.html'
    },
    {
        id: 'mission-container',
        path: 'components/mission.html'
    },
    {
        id: 'values-container',
        path: 'components/values.html'
    },
    {
        id: 'solutions-container',
        path: 'components/solutions.html'
    },
    {
        id: 'cta-container',
        path: 'components/cta.html'
    },
    {
        id: 'footer-container',
        path: 'components/footer.html'
    }
];

// Load all components
async function loadComponents() {
    try {
        const loadPromises = components.map(component => loadComponent(component.id, component.path));
        await Promise.all(loadPromises);
        
        // Initialize contact form after components are loaded
        initializeContactForm();
        
        console.log('All components loaded successfully');
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Load a single component
async function loadComponent(containerId, componentPath) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }
        
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}: ${response.status} ${response.statusText}`);
        }
        
        const html = await response.text();
        container.innerHTML = html;
        
        return true;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
        return false;
    }
}