with open('c:/Coding/projects/sales_agent/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

target = """                                <div class=\"flex-1 grid grid-cols-2 gap-5\">
                                    <div
                                        class=\"bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-3\">
                                        <div class=\"flex justify-between items-center\"> <span
                                                class=\"text-[10px] font-bold text-slate-400 uppercase tracking-wider\">Agent
                                                Efficiency</span><span
                                                class=\"text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 font-bold\">+12.5%</span>
                                        </div>
                                        <div class=\"text-2xl font-bold text-charcoal\"> 98.4% </div> <svg
                                            class=\"w-full h-12\" viewBox=\"0 0 100 40\">
                                            <path d=\"M0,30 Q10,10 20,25 T40,15 T60,20 T80,5 T100,15\" fill=\"none\"
                                                stroke=\"#135bec\" stroke-width=\"2\" />
                                        </svg>
                                    </div>
                                    <div
                                        class=\"bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-3\">
                                        <div class=\"flex justify-between items-center\"> <span
                                                class=\"text-[10px] font-bold text-slate-400 uppercase tracking-wider\">Neural
                                                Load</span><span
                                                class=\"text-[9px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 font-bold\">Stable</span>
                                        </div>
                                        <div class=\"text-2xl font-bold text-charcoal\"> 2.4k<span
                                                class=\"text-xs font-normal text-slate-400\">/hr</span> </div>
                                        <div class=\"mt-auto flex items-end gap-1\">
                                            <div class=\"flex-1 bg-slate-100 h-6 rounded\"> </div>
                                            <div class=\"flex-1 bg-slate-100 h-10 rounded\"> </div>
                                            <div class=\"flex-1 bg-primary/40 h-14 rounded\"> </div>
                                            <div class=\"flex-1 bg-slate-100 h-8 rounded\"> </div>
                                        </div>
                                    </div>
                                    <div class=\"col-span-2 bg-white p-4 rounded-xl border border-slate-100 shadow-sm\">
                                        <div class=\"flex justify-between items-center mb-3\"> <span
                                                class=\"text-[10px] font-bold text-slate-400 uppercase tracking-wider\">Active
                                                Neural Streams</span><span
                                                class=\"text-xs text-primary font-medium cursor-pointer\">Manage
                                                All</span> </div>
                                        <div class=\"space-y-2\">
                                            <div class=\"flex items-center justify-between p-2 rounded-lg bg-slate-50\">
                                                <div class=\"flex items-center gap-2\">
                                                    <div
                                                        class=\"size-5 rounded-full bg-indigo-500/20 text-indigo-500 flex items-center justify-center\">
                                                        <span
                                                            class=\"material-symbols-outlined text-[10px]\">neurology</span>
                                                    </div> <span class=\"text-xs font-medium\">Data Processor Agent
                                                        #104</span>
                                                </div>
                                                <div class=\"w-16 h-1.5 rounded-full bg-slate-200 overflow-hidden\">
                                                    <div class=\"w-3/4 h-full bg-primary\"> </div>
                                                </div>
                                            </div>
                                            <div class=\"flex items-center justify-between p-2 rounded-lg bg-slate-50\">
                                                <div class=\"flex items-center gap-2\">
                                                    <div
                                                        class=\"size-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center\">
                                                        <span
                                                            class=\"material-symbols-outlined text-[10px]\">auto_awesome</span>
                                                    </div> <span class=\"text-xs font-medium\">Sentiment Analysis
                                                        Node</span>
                                                </div>
                                                <div class=\"w-16 h-1.5 rounded-full bg-slate-200 overflow-hidden\">
                                                    <div class=\"w-1/2 h-full bg-emerald-500\"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>"""

replacement = """                                <div class=\"flex-1 bg-white p-0 rounded-xl border border-slate-100 shadow-sm overflow-hidden relative flex flex-col\">
                                    <!-- Toolbar -->
                                    <div class=\"h-10 border-b border-slate-100 px-4 flex items-center justify-between bg-slate-50 shrink-0 z-20\">
                                        <div class=\"flex items-center gap-2\">
                                            <span class=\"text-[10px] font-bold text-slate-500 uppercase tracking-wider\">Live Agent Workflow</span>
                                        </div>
                                        <div class=\"flex items-center gap-2\">
                                            <div class=\"px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-600 flex items-center gap-1.5 shadow-sm\">
                                                <div class=\"size-1.5 rounded-full bg-emerald-500 animate-pulse\"></div> Active
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Editor Canvas -->
                                    <div class=\"flex-1 relative w-full bg-[#f8fafc] overflow-hidden\" style=\"background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px); background-size: 24px 24px;\">
                                        <!-- Connectors SVG -->
                                        <svg class=\"absolute inset-0 w-full h-full pointer-events-none\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" style=\"z-index: 0;\">
                                            <defs>
                                                <linearGradient id=\"g1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">
                                                    <stop offset=\"0%\" stop-color=\"#94a3b8\" />
                                                    <stop offset=\"100%\" stop-color=\"#818cf8\" />
                                                </linearGradient>
                                                <linearGradient id=\"g2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">
                                                    <stop offset=\"0%\" stop-color=\"#818cf8\" />
                                                    <stop offset=\"100%\" stop-color=\"#94a3b8\" />
                                                </linearGradient>
                                                <linearGradient id=\"g3\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">
                                                    <stop offset=\"0%\" stop-color=\"#818cf8\" />
                                                    <stop offset=\"100%\" stop-color=\"#10b981\" />
                                                </linearGradient>
                                            </defs>
                                            
                                            <!-- Path Lead -> Qualify -->
                                            <path d=\"M 10,20 C 25,20 20,40 35,40\" fill=\"none\" stroke=\"url(#g1)\" stroke-width=\"0.5\" vector-effect=\"non-scaling-stroke\" />
                                            <!-- Path Qualify -> CRM -->
                                            <path d=\"M 35,40 C 60,40 50,15 70,15\" fill=\"none\" stroke=\"url(#g2)\" stroke-width=\"0.5\" vector-effect=\"non-scaling-stroke\" />
                                            <!-- Path Qualify -> Email -->
                                            <path d=\"M 35,40 C 60,40 50,65 70,65\" fill=\"none\" stroke=\"url(#g3)\" stroke-width=\"0.75\" stroke-dasharray=\"2\" vector-effect=\"non-scaling-stroke\" class=\"animate-[pulse_2s_ease-in-out_infinite]\" />
                                            
                                            <!-- Dot Animation -->
                                            <circle cx=\"22\" cy=\"30\" r=\"1.5\" fill=\"#818cf8\" class=\"animate-pulse\" />
                                        </svg>

                                        <!-- Node 1: Webhook -->
                                        <div class=\"absolute top-[10%] left-[2%] bg-white border border-slate-200 rounded-lg p-3 shadow-md w-28 md:w-32 z-10 transition-colors cursor-pointer hover:border-slate-300\">
                                            <div class=\"flex items-center gap-2 mb-2\">
                                                <div class=\"size-6 rounded-md bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 shadow-sm\">
                                                    <span class=\"material-symbols-outlined text-[14px]\">line_start</span>
                                                </div>
                                                <div class=\"text-[9px] md:text-[10px] font-bold text-slate-700 leading-tight\">Lead Capture</div>
                                            </div>
                                            <div class=\"text-[8px] text-slate-400 font-medium tracking-wide\">Website Form</div>
                                        </div>

                                        <!-- Node 2: AI Processor -->
                                        <div class=\"absolute top-[34%] left-[28%] bg-white border-2 border-primary rounded-lg p-3 shadow-xl w-32 md:w-36 z-10\">
                                            <div class=\"flex items-center gap-2 mb-2\">
                                                <div class=\"size-6 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 relative shadow-sm\">
                                                    <span class=\"material-symbols-outlined text-[14px]\">smart_toy</span>
                                                    <span class=\"absolute -top-1 -right-1 flex h-2 w-2\"><span class=\"animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75\"></span><span class=\"relative inline-flex rounded-full h-2 w-2 bg-primary\"></span></span>
                                                </div>
                                                <div class=\"text-[9px] md:text-[10px] font-bold text-slate-700 leading-tight\">Neural Qualify</div>
                                            </div>
                                            <div class=\"text-[8px] text-primary font-bold tracking-wide\">Processing Data...</div>
                                        </div>

                                        <!-- Node 3: CRM update -->
                                        <div class=\"absolute top-[5%] right-[2%] bg-white border border-slate-200 rounded-lg p-3 shadow-md w-28 md:w-32 z-10 opacity-60 hover:opacity-100 transition-opacity cursor-pointer\">
                                            <div class=\"flex items-center gap-2 mb-2\">
                                                <div class=\"size-6 rounded-md bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center shrink-0\">
                                                    <span class=\"material-symbols-outlined text-[14px]\">database</span>
                                                </div>
                                                <div class=\"text-[9px] md:text-[10px] font-bold text-slate-700 leading-tight\">Update CRM</div>
                                            </div>
                                            <div class=\"text-[8px] text-slate-400 font-medium tracking-wide\">Synced to HubSpot</div>
                                        </div>

                                        <!-- Node 4: Email Outreach -->
                                        <div class=\"absolute top-[55%] right-[2%] bg-white border border-emerald-200 rounded-lg p-3 shadow-md w-28 md:w-32 z-10 cursor-pointer\">
                                            <div class=\"flex items-center gap-2 mb-2\">
                                                <div class=\"size-6 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center shrink-0 shadow-sm\">
                                                    <span class=\"material-symbols-outlined text-[14px]\">forward_to_inbox</span>
                                                </div>
                                                <div class=\"text-[9px] md:text-[10px] font-bold text-slate-700 leading-tight\">Sales Outreach</div>
                                            </div>
                                            <div class=\"text-[8px] text-emerald-600 font-bold tracking-wide\">Drafting Email...</div>
                                        </div>
                                        
                                        <!-- Animated Log Terminal -->
                                        <div class=\"absolute bottom-2 left-2 right-2 bg-slate-900/95 backdrop-blur-md rounded-lg overflow-hidden flex flex-col p-3 z-20 font-mono text-[8.5px] md:text-[9.5px] leading-relaxed border border-slate-800 shadow-2xl\">
                                            <div class=\"flex gap-2\">
                                                <span class=\"text-slate-500 shrink-0\">14:02:01</span>
                                                <span class=\"text-slate-300 truncate\">[AGENT] Analyzing core lead parameters...</span>
                                            </div>
                                            <div class=\"flex gap-2\">
                                                <span class=\"text-slate-500 shrink-0\">14:02:05</span>
                                                <span class=\"text-emerald-400 font-bold truncate\">[SUCCESS] Lead qualified with score: 92%</span>
                                            </div>
                                            <div class=\"flex gap-2 relative\">
                                                <span class=\"text-slate-500 shrink-0\">14:02:06</span>
                                                <span class=\"text-indigo-300 truncate\">>> Dispatching email generation node<span class=\"animate-pulse text-white\">_</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>"""

target = target.replace('\r', '')
content_normalized = content.replace('\r', '')

with open('c:/Coding/projects/sales_agent/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_content = replacement + "\n"

# Replace lines 367-432 (0-indexed: 366:432)
lines = lines[:366] + [new_content] + lines[432:]

with open('c:/Coding/projects/sales_agent/index.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
print("Line index replacement successful")
