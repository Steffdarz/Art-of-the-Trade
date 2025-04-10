/**
 * Trading Journal Entry Loader
 * This script loads trading journal entries from a JSON file and renders them on the page.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get the container where journal entries will be displayed
    const journalContainer = document.getElementById('journal-entries');
    
    // Function to format R values with color coding
    function formatR(value) {
        const numValue = parseFloat(value);
        if (numValue > 0) {
            return `<span class="profit">+${value}R</span>`;
        } else if (numValue < 0) {
            return `<span class="loss">${value}R</span>`;
        }
        return value;
    }
    
    // Function to build the trade table HTML
    function buildTradeTable(trades) {
        if (!trades || trades.length === 0) {
            return '<p>No trades recorded for this session.</p>';
        }
        
        let tableHTML = `
            <table class="trade-table">
                <thead>
                    <tr>
                        <th>Trade #</th>
                        <th>Asset</th>
                        <th>Time</th>
                        <th>Entry</th>
                        <th>Direction</th>
                        <th>Size</th>
                        <th>Exit</th>
                        <th>R</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        trades.forEach(trade => {
            tableHTML += `
                <tr>
                    <td>${trade.number}</td>
                    <td>${trade.asset}</td>
                    <td>${trade.time}</td>
                    <td>${trade.entry}</td>
                    <td>${trade.direction}</td>
                    <td>${trade.size}</td>
                    <td>${trade.exit}</td>
                    <td>${formatR(trade.R)}</td>
                    <td>${trade.notes}</td>
                </tr>
            `;
        });
        
        tableHTML += `
                </tbody>
            </table>
        `;
        
        return tableHTML;
    }
    
    // Function to build the list items from an array
    function buildListItems(items) {
        if (!items || items.length === 0) return '';
        
        let listHTML = '<ul>';
        items.forEach(item => {
            // Check if the item has sub-items
            if (item.subitems && item.subitems.length > 0) {
                listHTML += `<li>${item.text}<ul>`;
                item.subitems.forEach(subitem => {
                    listHTML += `<li>${subitem}</li>`;
                });
                listHTML += `</ul></li>`;
            } else {
                listHTML += `<li>${item}</li>`;
            }
        });
        listHTML += '</ul>';
        
        return listHTML;
    }
    
    // Function to render an individual journal entry
    function renderJournalEntry(entry) {
        return `
            <div class="journal-entry">
                <div class="entry-header">
                    <div class="entry-date">Trading Journal - ${entry.date}</div>
                    <div class="entry-meta">
                        <div class="meta-item">
                            <strong>Market Focus:</strong> ${entry.market}
                        </div>
                    </div>
                </div>
                
                <div class="entry-content">
                    <h3>Market Context and Analysis</h3>
                    ${buildListItems(entry.marketContext)}
                    
                    <h3>Trade Details</h3>
                    ${buildTradeTable(entry.trades)}
                    
                    <h3>Key Observations and Lessons Learned</h3>
                    <div class="key-section">
                        <h4>What worked well today:</h4>
                        ${buildListItems(entry.workedWell)}
                    </div>
                    
                    <div class="key-section">
                        <h4>Areas for improvement:</h4>
                        ${buildListItems(entry.improvement)}
                    </div>
                    
                    <h3>Emotional & Behavioral Notes</h3>
                    ${buildListItems(entry.emotional)}
                    
                    <h3>Actionable Adjustments for Next Trading Session</h3>
                    ${buildListItems(entry.adjustments)}
                    
                    <div class="summary-box">
                        <h3>Summary of Performance</h3>
                        <div class="summary-stats">
                            <div class="stat-item">
                                <div class="stat-label">Total Trades</div>
                                <div class="stat-value">${entry.summary.totalTrades}</div>
                            </div>
                            
                            <div class="stat-item">
                                <div class="stat-label">Winners | Losers</div>
                                <div class="stat-value">${entry.summary.winners} | ${entry.summary.losers}</div>
                            </div>
                            
                            <div class="stat-item">
                                <div class="stat-label">Win Rate</div>
                                <div class="stat-value">${entry.summary.winRate}</div>
                            </div>
                            
                            <div class="stat-item">
                                <div class="stat-label">Net R</div>
                                <div class="stat-value ${entry.summary.netR.includes('-') ? 'loss' : 'profit'}">
                                    ${entry.summary.netR}
                                </div>
                            </div>
                        </div>
                        
                        <div class="reflection">
                            <strong>Trader's Reflection:</strong> ${entry.reflection}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Fetch the journal entries from the JSON file
    fetch('journal-entries.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Clear the loading message
            journalContainer.innerHTML = '';
            
            // Check if there are any entries
            if (data.entries && data.entries.length > 0) {
                // Sort entries by date (newest first)
                data.entries.sort((a, b) => {
                    // Use a simple string comparison for dates like "April 8~9, 2025"
                    return b.date.localeCompare(a.date);
                });
                
                // Render each entry
                data.entries.forEach(entry => {
                    journalContainer.innerHTML += renderJournalEntry(entry);
                });
            } else {
                // No entries found
                journalContainer.innerHTML = `
                    <div class="no-entries">
                        <i class="fas fa-book"></i>
                        <h3>No Journal Entries Yet</h3>
                        <p>I haven't added any trading journal entries yet. Check back soon!</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error loading journal entries:', error);
            journalContainer.innerHTML = `
                <div class="no-entries">
                    <i class="fas fa-exclamation-circle"></i>
                    <h3>Error Loading Journal</h3>
                    <p>There was a problem loading the journal entries. Please try again later.</p>
                    <p>Error details: ${error.message}</p>
                </div>
            `;
        });
});
