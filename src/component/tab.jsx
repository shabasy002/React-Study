import { useState } from "react";

function Tab() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs-container">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => setActiveTab("tab1")}
        >
          Tab 1
        </button>
        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </button>
        <button
          className={activeTab === "tab3" ? "active" : ""}
          onClick={() => setActiveTab("tab3")}
        >
          Tab 3
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "tab1" && <p>This is content for Tab 1.</p>}
        {activeTab === "tab2" && <p>This is content for Tab 2.</p>}
        {activeTab === "tab3" && <p>This is content for Tab 3.</p>}
      </div>
    </div>
  );
}

export default Tab;
