import React, { useState, useEffect, useCallback } from "react";
import {
  Sun, Moon, Folder, FolderOpen, ChevronRight, FolderGit2, FileText
} from "lucide-react";
import "./App.css";

import { TABS, PROJECTS } from "./data/portfolioData";
import { BootSequence } from "./components/BootSequence";
import {
  AboutTab, SkillsTab, ExperienceTab, ProjectsTab, ProjectDetailTab,
  EducationTab, CertificationsTab, ContactTab
} from "./components/Tabs";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState("about");
  const [booted, setBooted] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(true);

  const finishBoot = useCallback(() => setBooted(true), []);

  useEffect(() => {
    const onKey = () => finishBoot();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finishBoot]);

  const openProject = useCallback((file) => {
    setActiveTab(`project:${file}`);
    setProjectsOpen(true);
  }, []);

  const isProjectDetail = activeTab.startsWith("project:");
  const activeProjectFile = isProjectDetail ? activeTab.slice(8) : null;

  const getTopbarLabel = () => {
    if (isProjectDetail) return activeProjectFile;
    return TABS.find(t => t.id === activeTab)?.label;
  };

  const renderTab = () => {
    if (isProjectDetail) {
      return (
        <ProjectDetailTab
          projectFile={activeProjectFile}
          onBack={() => setActiveTab("projects")}
        />
      );
    }
    switch (activeTab) {
      case "about": return <AboutTab />;
      case "skills": return <SkillsTab />;
      case "experience": return <ExperienceTab />;
      case "projects": return <ProjectsTab onSelectProject={openProject} />;
      case "education": return <EducationTab />;
      case "certifications": return <CertificationsTab />;
      case "contact": return <ContactTab />;
      default: return null;
    }
  };

  return (
    <div className={`rc-root theme-${theme}`}>
      {!booted && <BootSequence onDone={finishBoot} />}

      {booted && (
        <>
          <div className="rc-topbar">
            <div className="rc-topbar-dots">
              <span className="rc-dot rc-dot-r" />
              <span className="rc-dot rc-dot-y" />
              <span className="rc-dot rc-dot-g" />
            </div>
            <div className="rc-topbar-title">mah-rukh-portfolio — {getTopbarLabel()}</div>
            <button
              className="rc-toggle"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Moon size={13} /> : <Sun size={13} />}
              {theme === "dark" ? "DARK" : "LIGHT"}
            </button>
          </div>

          <div className="rc-tabbar">
            {TABS.map((t) => (
              <div
                key={t.id}
                className={`rc-tabbar-item ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                <t.icon size={13} /> {t.label}
              </div>
            ))}
          </div>

          <div className="rc-body">
            <div className="rc-sidebar">
              <div className="rc-tree-root"><FolderOpen size={14} /> portfolio</div>
              {TABS.filter((t) => t.id !== "projects").map((t) => (
                <div
                  key={t.id}
                  className={`rc-tree-item ${activeTab === t.id ? "active" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  <t.icon size={14} /> {t.label}
                </div>
              ))}

              <div className="rc-tree-folder" onClick={() => setProjectsOpen((o) => !o)}>
                <ChevronRight size={13} className={`rc-chevron ${projectsOpen ? "open" : ""}`} />
                {projectsOpen ? <FolderOpen size={14} /> : <Folder size={14} />} projects/
              </div>
              {projectsOpen && (
                <div className="rc-tree-sub">
                  <div
                    className={`rc-tree-item ${activeTab === "projects" ? "active" : ""}`}
                    onClick={() => setActiveTab("projects")}
                  >
                    <FolderGit2 size={13} /> view all
                  </div>
                  {PROJECTS.map((p) => (
                    <div
                      key={p.file}
                      className={`rc-tree-item ${activeTab === `project:${p.file}` ? "active" : ""}`}
                      onClick={() => openProject(p.file)}
                    >
                      <FileText size={13} /> {p.file}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rc-main">{renderTab()}</div>
          </div>
        </>
      )}
    </div>
  );
}