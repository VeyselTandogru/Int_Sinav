import React, { useState, useEffect, useMemo } from 'react';
import './styles/PortfolioSection.css';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const PortfolioSection = ({ id }) => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubProfileUrl = "https://github.com/VeyselTandogru";
  
  const defaultProjects = useMemo(() => [
    {
      id: 101,
      name: "security-scanner",
      description: "Web uygulamalarında OWASP Top 10 güvenlik açıklarını taramak için Python ile geliştirilmiş bir araç.",
      url: "https://github.com/VeyselTandogru/security-scanner",
      homepage: "",
      stars: 12,
      forks: 3,
      language: "Python",
      created_at: "01.04.2023",
      updated_at: "15.08.2023",
    },
    {
      id: 102,
      name: "network-analyzer",
      description: "Ağ trafiğini analiz eden ve anormal davranışları tespit eden Python tabanlı güvenlik aracı.",
      url: "https://github.com/VeyselTandogru/network-analyzer",
      homepage: "",
      stars: 8,
      forks: 2,
      language: "Python",
      created_at: "12.06.2023",
      updated_at: "05.09.2023",
    },
    {
      id: 103,
      name: "secure-file-share",
      description: "Uçtan uca şifreleme ile güvenli dosya paylaşımı sağlayan web uygulaması.",
      url: "https://github.com/VeyselTandogru/secure-file-share",
      homepage: "https://secure-file-share.vercel.app",
      stars: 15,
      forks: 4,
      language: "JavaScript",
      created_at: "23.09.2023",
      updated_at: "10.12.2023",
    }
  ], []);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        try {

          const response = await fetch(`https://api.github.com/users/VeyselTandogru/repos`, {
            method: 'GET',
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
            cache: 'no-cache'
          });
          
          if (!response.ok) {
            console.error(`GitHub API hatası: ${response.status} ${response.statusText}`);
            
            console.log("GitHub API'ye erişilemedi, varsayılan projeler kullanılıyor.");
            setGithubProjects(defaultProjects);
            setLoading(false);
            return;
          }
          
          const data = await response.json();
          console.log(`${data.length} repo alındı:`, data);
          
          if (data.length === 0) {
            console.log("GitHub'dan hiç repo alınamadı, varsayılan projeler kullanılıyor.");
            setGithubProjects(defaultProjects);
            setLoading(false);
            return;
          }
          
          const simplifiedData = data.map(repo => {
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description || "Açıklama yok",
              url: repo.html_url,
              homepage: repo.homepage,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              language: repo.language || "",
              created_at: new Date(repo.created_at).toLocaleDateString('tr-TR'),
              updated_at: new Date(repo.updated_at).toLocaleDateString('tr-TR'),
            };
          });
          
          setGithubProjects(simplifiedData);
        } catch (apiError) {
          console.error("GitHub API isteği sırasında hata oluştu:", apiError);
          console.log("Hata nedeniyle varsayılan projeler kullanılıyor.");
          setGithubProjects(defaultProjects);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("GitHub projelerini alırken hata oluştu:", err);
        setError("GitHub projelerini alırken bir hata oluştu. Varsayılan projeler gösteriliyor.");
        setGithubProjects(defaultProjects);
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, [defaultProjects]);

  return (
    <section id={id} className="portfolio">
      <div className="section-container">
        <h2 className="section-title">GitHub Projelerim</h2>
        <p className="portfolio-intro">GitHub üzerindeki projelerime aşağıdan erişebilirsiniz. Her proje için kaynak kodları ve daha fazla bilgi için linklere tıklayabilirsiniz.</p>
        

        
        {loading ? (
          <div className="loading">GitHub projeleri yükleniyor...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : githubProjects.length > 0 ? (
          <div className="github-projects">
            {githubProjects.map((repo) => (
              <div className="github-card" key={repo.id}>
                <h4 className="repo-name">{repo.name}</h4>
                <p className="repo-description">{repo.description}</p>
                
                {repo.language && (
                  <div className="repo-tech">
                    <span className="tech-tag">{repo.language}</span>
                  </div>
                )}
                
                <div className="repo-stats">
                  <span className="repo-stat">
                    <FaStar /> {repo.stars}
                  </span>
                  <span className="repo-stat">
                    <FaCodeBranch /> {repo.forks}
                  </span>
                </div>
                
                <div className="repo-links">
                  <a href={repo.url} className="repo-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Repo
                  </a>
                  {repo.homepage && (
                    <a href={repo.homepage} className="repo-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
                
                <div className="repo-dates">
                  <span>Oluşturulma: {repo.created_at}</span>
                  <span>Son Güncelleme: {repo.updated_at}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-repos">
            <p>Henüz GitHub'da hiç repo bulunmuyor veya repolar özel olabilir.</p>
            <a href={githubProfileUrl} className="button secondary-button" target="_blank" rel="noopener noreferrer">
              GitHub Profilini Ziyaret Et
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection; 