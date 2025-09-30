function generateCVETable() {
  const csvData = `CVE,ZDI,Description,Advisory,Employer
CVE-2023-44449,ZDI-23-1717,NETGEAR ProSAFE Network Management System clearAlertByIds SQL Injection,https://kb.netgear.com/000065866/Security-Advisory-for-Multiple-Vulnerabilities-on-the-NMS300-PSV-2023-0114-PSV-2023-0115,Trend Micro
CVE-2023-44450,ZDI-23-1718,NETGEAR ProSAFE Network Management System getNodesByTopologyMapSearch SQL Injection,https://kb.netgear.com/000065866/Security-Advisory-for-Multiple-Vulnerabilities-on-the-NMS300-PSV-2023-0114-PSV-2023-0115,Trend Micro
CVE-2023-50231,ZDI-23-1847,NETGEAR ProSAFE Network Management System saveNodeLabel Cross-Site Scripting,https://kb.netgear.com/000065901/Security-Advisory-for-Stored-Cross-Site-Scripting-on-the-NMS300-PSV-2023-0106,Trend Micro
CVE-2024-31138,ZDI-24-360,JetBrains TeamCity AgentDistributionSettingsController Cross-Site Scripting,https://www.jetbrains.com/privacy-security/issues-fixed/?product=TeamCity&version=2024.03,Trend Micro
CVE-2024-50317,ZDI-24-1488,Ivanti Avalanche WLAvalancheService TV_FN Null Pointer Dereference,https://forums.ivanti.com/s/article/Security-Advisory-Ivanti-Avalanche-Multiple-CVEs-Q4-2024-Release,Trend Micro
CVE-2024-50318,ZDI-24-1489,Ivanti Avalanche WLAvalancheService TV_FP Null Pointer Dereference,https://forums.ivanti.com/s/article/Security-Advisory-Ivanti-Avalanche-Multiple-CVEs-Q4-2024-Release,Trend Micro
CVE-2024-50319,ZDI-24-1490,Ivanti Avalanche WLAvalancheService TV_FN Infinite Loop,https://forums.ivanti.com/s/article/Security-Advisory-Ivanti-Avalanche-Multiple-CVEs-Q4-2024-Release,Trend Micro
CVE-2024-50320,ZDI-24-1491,Ivanti Avalanche WLAvalancheService TV_FC Infinite Loop,https://forums.ivanti.com/s/article/Security-Advisory-Ivanti-Avalanche-Multiple-CVEs-Q4-2024-Release,Trend Micro
CVE-2024-50321,ZDI-24-1492,Ivanti Avalanche WLAvalancheService TV_FP Infinite Loop,https://forums.ivanti.com/s/article/Security-Advisory-Ivanti-Avalanche-Multiple-CVEs-Q4-2024-Release,Trend Micro
CVE-2025-47851,,JetBrains TeamCity GitHub Checks Stored Cross-Site Scripting,https://www.jetbrains.com/privacy-security/issues-fixed/?product=TeamCity&version=2025.03.2,Converge Technology Solutions
CVE-2025-47852,,JetBrains TeamCity YouTrack Integration Stored Cross-Site Scripting,https://www.jetbrains.com/privacy-security/issues-fixed/?product=TeamCity&version=2025.03.2,Converge Technology Solutions
CVE-2025-47853,,JetBrains TeamCity Jira Integration Stored Cross-Site Scripting,https://www.jetbrains.com/privacy-security/issues-fixed/?product=TeamCity&version=2025.03.2,Converge Technology Solutions
CVE-2025-52879,,JetBrains TeamCity NPM Registry Reflected Cross-Site Scripting,https://www.jetbrains.com/privacy-security/issues-fixed/?product=TeamCity&version=2025.03.3,Converge Technology Solutions
CVE-2025-34080,,Contec CONPROSYS HMI Reflected Cross-Site Scripting,https://jvn.jp/en/vu/JVNVU92266386/,Converge Technology Solutions
CVE-2025-34081,,Contec CONPROSYS HMI Active Debug Code,https://jvn.jp/en/vu/JVNVU92266386/,Converge Technology Solutions
CVE-2025-41442,,Advantech iView Reflected Cross-Site Scripting,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-46704,,Advantech iView processImportRequest Directory Traversal,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-48891,,Advantech iView checkSQLInjection SQL Injection,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-52459,,Advantech iView backupDatabase Argument Injection,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-52577,,Advantech iView archiveTrapRange SQL Injection,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-53397,,Advantech iView Reflected Cross-Site Scripting,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-53475,,Advantech iView getNextTrapPage SQL Injection,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-53509,,Advantech iView restoreDatabase Argument Injection,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-53515,,Advantech iView archiveTrap SQL Injection,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
CVE-2025-53519,,Advantech iView Reflected Cross-Site Scripting,https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-08,Converge Technology Solutions
,ZDI-25-823,Microsoft Windows Theme File Parsing NTLM Relay,https://www.zerodayinitiative.com/advisories/ZDI-25-823/,Trend Micro
,ZDI-25-824,Microsoft Windows Theme File Parsing NTLM Relay,https://www.zerodayinitiative.com/advisories/ZDI-25-824/,Trend Micro
CVE-2025-34172,,Netgate pfSense HAProxy Package Reflected Cross-Site Scripting,https://redmine.pfsense.org/issues/16411,Pellera Technologies
CVE-2025-34173,,Netgate pfSense Snort Package Directory Traversal,https://redmine.pfsense.org/issues/16412,Pellera Technologies
CVE-2025-34174,,Netgate pfSense Status_Traffic_Totals Package Stored Cross-Site Scripting,https://redmine.pfsense.org/issues/16413,Pellera Technologies
CVE-2025-34175,,Netgate pfSense Suricata Package Reflected Cross-Site Scripting,https://redmine.pfsense.org/issues/16414,Pellera Technologies
CVE-2025-34176,,Netgate pfSense Suricata Package Directory Traversal,https://redmine.pfsense.org/issues/16414,Pellera Technologies
CVE-2025-34177,,Netgate pfSense Suricata Package Stored Cross-Site Scripting,https://redmine.pfsense.org/issues/16414,Pellera Technologies
CVE-2025-34178,,Netgate pfSense Suricata Package Stored Cross-Site Scripting,https://redmine.pfsense.org/issues/16414,Pellera Technologies`;
  const lines = csvData.trim().split('\n');
  const headers = lines[0].split(',');
  const advisoryIndex = headers.indexOf('Advisory');
  const table = document.createElement('table');
  var numCVEs = 0;
  const headerRow = lines.shift();
  lines.push(headerRow);
  lines.slice().reverse().forEach((line, index) => {
    const row = document.createElement('tr');
    const cells = line.split(',');
	var rowIndex = 0;
    cells.forEach(cellText => {
      const cell = document.createElement(index === 0 ? 'th' : 'td');
	  
	  if ((rowIndex === advisoryIndex) && (index !== 0)) {
		const adLink = document.createElement('a');
		adLink.textContent = 'Link';
		adLink.href = cellText;
		adLink.target = '__blank';
		cell.appendChild(adLink);
	  } else {
		if(cellText.startsWith('CVE-')) {
		  const adLink = document.createElement('a');
		  adLink.textContent = cellText;
		  adLink.href = 'https://www.cve.org/CVERecord?id=' + cellText;
		  adLink.target = '__blank';
		  cell.appendChild(adLink);
		  numCVEs += 1;
		} else if (cellText.startsWith('ZDI-')) {
		  const adLink = document.createElement('a');
		  adLink.textContent = cellText;
		  adLink.href = 'https://www.zerodayinitiative.com/advisories/' + cellText + '/';
		  adLink.target = '__blank';
		  cell.appendChild(adLink);
		} else {
		  cell.textContent = cellText !== '' ? cellText : 'N/A';
		}
	  }
      if ((index !== 0) && (index !== advisoryIndex)) {
        cell.style.whiteSpace = 'nowrap';
      }
		
      row.appendChild(cell);
	  rowIndex += 1;
    });

    table.appendChild(row);
  });

  const container = document.getElementById('tableID');
  if (container) {
    container.innerHTML = '';
    container.appendChild(table);
  } else {
    console.error("Element with ID 'tableID' not found.");
  }
  const numVulnsHeader = document.getElementById('numVulnsID');
  if (numVulnsHeader) {
	const vulnHeader = document.createElement('p');
	vulnHeader.innerText = 'Vulnerabilities Found: ' + String(lines.length - 1) + ', CVEs Published: ' + String(numCVEs);
	numVulnsHeader.appendChild(vulnHeader);
  } else {
	console.error("Element with ID 'numVulnsID' not found.")
  }
}

generateCVETable();
