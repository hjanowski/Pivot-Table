// Sample data for the data pipelines table
const pipelineData = [
    {
        name: "bingalon 2045715631",
        dataSpace: "default",
        source: "Bing Ads For EMI",
        status: "Active",
        lastRunStatus: "Failed",
        lastRun: "6/12/2025, 12:00 AM",
        nextRun: "6/13/2025",
        lastDataDate: "2/21/2025"
    },
    {
        name: "Banking_DKO_13_6_Banki...",
        dataSpace: "default",
        source: "Total Connect",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "3/11/2025, 09:42 AM",
        nextRun: "",
        lastDataDate: "2/17/2025"
    },
    {
        name: "GoogleAds 1981477123",
        dataSpace: "default",
        source: "Google Ads",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:00 AM",
        nextRun: "6/13/2025",
        lastDataDate: "6/12/2025"
    },
    {
        name: "YoutubeAds 1981462095",
        dataSpace: "default",
        source: "Youtube Ads For EMI",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:00 AM",
        nextRun: "6/13/2025",
        lastDataDate: ""
    },
    {
        name: "Meta_ads2 1973711986",
        dataSpace: "default",
        source: "Meta Ads",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:00 AM",
        nextRun: "6/13/2025",
        lastDataDate: ""
    },
    {
        name: "meta_ads_3 1967535071",
        dataSpace: "default",
        source: "Meta Ads",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:02 AM",
        nextRun: "6/13/2025",
        lastDataDate: ""
    },
    {
        name: "Banking_DKO_13_6_new2...",
        dataSpace: "default",
        source: "Total Connect",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "3/24/2025, 11:09 PM",
        nextRun: "",
        lastDataDate: "3/17/2025"
    },
    {
        name: "Banking_DKO_13_6_new3...",
        dataSpace: "default",
        source: "Total Connect",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "4/1/2025, 05:24 AM",
        nextRun: "",
        lastDataDate: "3/17/2025"
    },
    {
        name: "META_ADS_NEW 1573239...",
        dataSpace: "default",
        source: "Meta Ads",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:05 AM",
        nextRun: "6/13/2025",
        lastDataDate: ""
    },
    {
        name: "Banking_DKO_13_6_new5...",
        dataSpace: "default",
        source: "Total Connect",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "4/22/2025, 03:11 AM",
        nextRun: "",
        lastDataDate: "4/17/2025"
    },
    {
        name: "Google_Ads_13 1561549853",
        dataSpace: "default",
        source: "Google Ads",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:06 AM",
        nextRun: "6/13/2025",
        lastDataDate: "6/11/2025"
    },
    {
        name: "Banking_csv 1571362619",
        dataSpace: "default",
        source: "Total Connect",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "4/22/2025, 06:23 AM",
        nextRun: "",
        lastDataDate: "3/26/2025"
    },
    {
        name: "GA4new1 1644174899",
        dataSpace: "default",
        source: "Google Analytics For EMI",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:10 AM",
        nextRun: "6/13/2025",
        lastDataDate: "6/11/2025"
    },
    {
        name: "Banking_DKO_13_6_new6...",
        dataSpace: "default",
        source: "Total Connect",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "5/13/2025, 11:38 PM",
        nextRun: "",
        lastDataDate: "5/17/2025"
    },
    {
        name: "DFA 636830745",
        dataSpace: "default",
        source: "Google Dfa For EMI",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:12 AM",
        nextRun: "6/13/2025",
        lastDataDate: "6/12/2025"
    },
    {
        name: "GoogleAnalyticsTest 23117...",
        dataSpace: "default",
        source: "Google Analytics For EMI",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:13 AM",
        nextRun: "6/13/2025",
        lastDataDate: "6/11/2025"
    },
    {
        name: "Google_Ads_mock 88770...",
        dataSpace: "data_space_1",
        source: "EMI Mock",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:16 AM",
        nextRun: "6/13/2025",
        lastDataDate: "6/12/2025"
    },
    {
        name: "Meta_Ads_mock 887716775",
        dataSpace: "data_space_1",
        source: "EMI Mock",
        status: "Active",
        lastRunStatus: "Success",
        lastRun: "6/12/2025, 12:21 AM",
        nextRun: "6/13/2025",
        lastDataDate: "6/12/2025"
    }
];

// Function to get status badge HTML
function getStatusBadge(status, isRunStatus = false) {
    const statusLower = status.toLowerCase();
    let badgeClass = '';
    
    if (isRunStatus) {
        switch (statusLower) {
            case 'success':
                badgeClass = 'status-success';
                break;
            case 'failed':
                badgeClass = 'status-failed';
                break;
            default:
                badgeClass = 'status-active';
        }
    } else {
        switch (statusLower) {
            case 'active':
                badgeClass = 'status-active';
                break;
            default:
                badgeClass = 'status-active';
        }
    }
    
    return `<span class="status-badge ${badgeClass}">${status}</span>`;
}

// Function to populate the table
function populateTable(data) {
    const tbody = document.getElementById('pipelineTableBody');
    tbody.innerHTML = '';
    
    data.forEach((pipeline, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <a href="#" class="pipeline-name">${pipeline.name}</a>
            </td>
            <td>${pipeline.dataSpace}</td>
            <td>${pipeline.source}</td>
            <td>${getStatusBadge(pipeline.status)}</td>
            <td>${getStatusBadge(pipeline.lastRunStatus, true)}</td>
            <td>${pipeline.lastRun}</td>
            <td>${pipeline.nextRun}</td>
            <td>${pipeline.lastDataDate}</td>
            <td>
                <div class="action-menu">
                    <button class="action-btn" onclick="showActionMenu(${index})">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to show action menu (placeholder)
function showActionMenu(index) {
    console.log(`Action menu for pipeline ${index}`);
    // This would typically show a dropdown menu with actions
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.table-search');
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredData = pipelineData.filter(pipeline => 
        pipeline.name.toLowerCase().includes(searchTerm) ||
        pipeline.source.toLowerCase().includes(searchTerm) ||
        pipeline.dataSpace.toLowerCase().includes(searchTerm)
    );
    
    populateTable(filteredData);
}

// Function to handle refresh
function handleRefresh() {
    const refreshBtn = document.querySelector('.refresh-btn i');
    refreshBtn.style.animation = 'spin 0.5s linear';
    
    setTimeout(() => {
        refreshBtn.style.animation = '';
        populateTable(pipelineData);
    }, 500);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Populate the table with sample data
    populateTable(pipelineData);
    
    // Add search functionality
    const searchInput = document.querySelector('.table-search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Add refresh functionality
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', handleRefresh);
    }
    
    // Add sorting functionality to table headers
    const sortableHeaders = document.querySelectorAll('.sortable');
    sortableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Basic sorting functionality would go here
            console.log('Sorting by:', this.textContent.trim());
        });
    });
});

// Add CSS animation for refresh button
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);