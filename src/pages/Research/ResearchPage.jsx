import React, { useState } from "react";
import profile from "../../data/profile";
import { Search, ExternalLink, FileText, Filter, Book, Award } from "lucide-react";

const ResearchPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Machine Learning", "Sustainable Concrete", "Hydropower", "Review Articles"];

  // Helper to map tags to filter names
  const filterMatches = (paperTags, filter) => {
    if (filter === "All") return true;
    if (filter === "Machine Learning") return paperTags.includes("ML");
    if (filter === "Sustainable Concrete") return paperTags.includes("Sustainable Concrete") || paperTags.includes("Geopolymer Concrete");
    if (filter === "Hydropower") return paperTags.includes("Hydropower");
    if (filter === "Review Articles") return paperTags.includes("Review");
    return false;
  };

  const filteredPublications = profile.publications.filter(pub => 
    filterMatches(pub.tags, activeFilter)
  );

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="custom-container">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-5xl font-black text-[#0A2A66] mb-6 tracking-tighter uppercase leading-none">Scholarly <span className="text-accent">Publications</span></h1>
          <div className="w-32 h-2 bg-accent mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-medium">
            A comprehensive record of peer-reviewed research and authored engineering textbooks.
          </p>
        </div>

        {/* Section 1: Authored Textbooks (Always Visible) */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black text-[#0A2A66] uppercase tracking-tighter">Authored Textbooks</h2>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {profile.textbooks.map((book, index) => (
              <div key={index} className="flex flex-col sm:flex-row bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
                {/* Image Section - More compact */}
                <div className="sm:w-1/3 aspect-[3/4] sm:aspect-auto bg-[#0A2A66] relative overflow-hidden">
                   {book.image ? (
                     <img 
                       src={book.image} 
                       alt={book.title} 
                       className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-110 transition-transform duration-700" 
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center">
                        <Book size={48} className="text-accent opacity-20" />
                     </div>
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A66]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                        {book.year}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                        ISBN: {book.isbn}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-black text-[#0A2A66] leading-tight mb-4 group-hover:text-accent transition-colors">
                      {book.title}
                    </h4>
                    
                    <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <Award size={16} className="text-accent shrink-0 mt-0.5" />
                      <p className="text-xs font-bold text-[#0A2A66]/70 leading-relaxed italic">
                        "{book.recognition}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-[#0A2A66]/30 uppercase tracking-[0.3em]">
                    <div className="w-8 h-px bg-gray-200"></div>
                    Authored Engineering Literature
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Publications with Filters */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black text-[#0A2A66] uppercase tracking-tighter">Publications</h2>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          {/* Filter System */}
          <div className="mb-12 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-[#0A2A66] font-bold mr-4">
              <Filter size={18} />
              <span className="uppercase tracking-widest text-xs">Filter:</span>
            </div>
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeFilter === filter 
                  ? "bg-[#0A2A66] text-white shadow-xl" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Publication List */}
          <div className="space-y-8">
            {filteredPublications.map((pub, index) => (
              <div key={index} className="group p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl transition-all hover:border-[#0A2A66]/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-accent/10 text-accent rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A2A66] mb-4 group-hover:text-accent transition-colors leading-tight">
                      {pub.citation}
                    </h3>
                    <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                      <span className="flex items-center gap-2"><FileText size={16} /> {pub.journal}</span>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                  <a 
                    href={pub.doi} 
                    target="_blank" 
                    rel="noreferrer"
                    className="shrink-0 flex items-center gap-2 px-6 py-3 bg-gray-50 text-[#0A2A66] font-bold rounded-xl hover:bg-[#0A2A66] hover:text-white transition-all shadow-sm"
                  >
                    DOI <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-400 font-medium">No publications found for this category.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;
