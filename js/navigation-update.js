document.addEventListener('DOMContentLoaded', function() {
    const navigationMenu = `
        <ul class="main-nav">
            <li class="has-dropdown">
                <a href="#">Manual & Journal ▾</a>
                <ul class="dropdown">
                    <li><a href="trading-manual.html">Trading Manual</a></li>
                    <li><a href="trading-journal.html">Trading Journal</a></li>
                </ul>
            </li>
            <li class="has-dropdown">
                <a href="futures.html">Futures ▾</a>
                <ul class="dropdown">
                    <li><a href="trading-mindset.html">Trading Mindset</a></li>
                    <li><a href="risk-management.html">Risk Management</a></li>
                    <li><a href="technical-analysis.html">Technical Analysis</a></li>
                </ul>
            </li>
            <li class="has-dropdown">
                <a href="web3.html">Web3 ▾</a>
                <ul class="dropdown">
                    <li><a href="dex-trading.html">DEX Trading</a></li>
                    <li><a href="trading-tools.html">Trading Tools</a></li>
                    <li><a href="web3-strategy.html">Web3 Strategy</a></li>
                </ul>
            </li>
            <li><a href="market.html">Market</a></li>
            <li class="has-dropdown">
                <a href="#">Education ▾</a>
                <ul class="dropdown">
                    <li><a href="./Trading Process & Manual Part 1.html">Trading Process & Manual Part 1</a></li>
                    <li><a href="./Trading Process & Manual Part 2.html">Trading Process & Manual Part 2</a></li>
                    <li><a href="./The Trading Mindset & Psychology - Part 1.html">The Trading Mindset & Psychology - Part 1</a></li>
                    <li><a href="./The Trading Mindset & Psychology - Part 2.html">The Trading Mindset & Psychology - Part 2</a></li>
                    <li><a href="./The Trading Mindset & Psychology - Part 3.html">The Trading Mindset & Psychology - Part 3</a></li>
                    <li><a href="./Trading Routine and Goal Setting.html">Trading Routine and Goal Setting</a></li>
                </ul>
            </li>
            <li><a href="resources.html">Resources</a></li>
        </ul>
    `;

    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.innerHTML = navigationMenu;
    }
});
