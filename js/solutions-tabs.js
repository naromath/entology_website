/**
 * Solutions Tab Functionality
 * Handles the tab switching in the solutions section
 */

// Solution content data
const solutionContent = {
    '기업 노하우 챗봇': {
        title: '기업 노하우 관리 및 제공 챗봇',
        description: '기업 내 축적된 지식과 노하우를 체계적으로 관리하고, AI 기반 챗봇을 통해 필요한 순간에 즉시 제공하는 솔루션입니다. 이를 통해 기업의 가장 중요한 자산인 지식을 보존하고 활용할 수 있도록 돕습니다.',
        features: [
            '24/7 지식 접근성: 필요한 순간에 언제든지 답변 제공',
            '자연어 인터페이스: 복잡한 검색 없이 질문만으로 정보 접근',
            '맥락 이해: 사용자의 역할과 요구에 맞춘 지능적 응답',
            '지속적 학습: 새로운 지식을 자동으로 습득하고 업데이트',
            '다양한 소스 통합: 모든 기업 자료를 단일 접점에서 활용'
        ],
        imageUrl: '/api/placeholder/600/400',
        imageAlt: '기업 노하우 챗봇 이미지'
    },
    '데이터 통합 플랫폼': {
        title: '통합 데이터 분석 플랫폼',
        description: '분절된 데이터 사일로를 해체하고 조직 전체의 데이터를 통합하여 분석할 수 있는 플랫폼입니다. 이를 통해 데이터의 잠재적 가치를 완전히 실현하고 더 나은 의사결정을 지원합니다.',
        features: [
            '데이터 통합: 다양한 소스의 데이터를 단일 플랫폼에서 관리',
            '실시간 분석: 통합된 데이터를 실시간으로 분석하여 인사이트 도출',
            '시각화 도구: 복잡한 데이터를 직관적인 시각적 형태로 표현',
            '협업 기능: 팀 간 데이터 기반 협업 촉진',
            '보안 및 거버넌스: 강력한 데이터 보안과 접근 관리'
        ],
        imageUrl: '/api/placeholder/600/400',
        imageAlt: '데이터 통합 플랫폼 이미지'
    },
    'AI 의사결정 지원': {
        title: 'AI 기반 의사결정 지원 시스템',
        description: '복잡한 데이터를 분석하여 인간의 의사결정을 보완하고 강화하는 AI 솔루션입니다. 인간의 판단과 창의성을 존중하면서 더 나은 결정을 내릴 수 있도록 지원합니다.',
        features: [
            '예측 분석: 과거 데이터를 기반으로 미래 트렌드 예측',
            '시나리오 시뮬레이션: 다양한 의사결정 시나리오의 결과 시뮬레이션',
            '맞춤형 추천: 상황과 목표에 맞는 최적의 선택지 추천',
            '불확실성 관리: 리스크 요소 식별 및 관리 방안 제시',
            '의사결정 기록: 의사결정 과정과 결과의 체계적 기록 및 학습'
        ],
        imageUrl: '/api/placeholder/600/400',
        imageAlt: 'AI 의사결정 지원 시스템 이미지'
    }
};

// Initialize solution tabs
function initializeSolutionTabs() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // After components are loaded, set up the tabs
        setTimeout(setupSolutionTabs, 500);
    });
}

// Set up solution tabs
function setupSolutionTabs() {
    const tabs = document.querySelectorAll('.solution-tab');
    if (!tabs.length) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Update content based on selected tab
            updateSolutionContent(tab.textContent);
        });
    });
}

// Update solution content
function updateSolutionContent(tabName) {
    if (!solutionContent[tabName]) return;
    
    const content = solutionContent[tabName];
    const solutionTitle = document.querySelector('.solution-title');
    const solutionDesc = document.querySelector('.solution-description');
    const solutionFeatures = document.querySelector('.solution-features');
    const solutionImage = document.querySelector('.solution-image img');
    
    if (solutionTitle) solutionTitle.textContent = content.title;
    if (solutionDesc) solutionDesc.textContent = content.description;
    
    // Update features
    if (solutionFeatures) {
        solutionFeatures.innerHTML = '';
        content.features.forEach(feature => {
            const li = document.createElement('li');
            li.className = 'solution-feature';
            li.innerHTML = `
                <span class="feature-icon">✓</span>
                <span>${feature}</span>
            `;
            solutionFeatures.appendChild(li);
        });
    }
    
    // Update image
    if (solutionImage) {
        solutionImage.src = content.imageUrl;
        solutionImage.alt = content.imageAlt;
    }
}