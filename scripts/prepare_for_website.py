#!/usr/bin/env python3
"""
Prepare course materials for website publication.
Filters internal notes, alternatives, and unpublished content.
Converts detailed internal files to clean student-facing versions.
"""

import yaml
import sys
from pathlib import Path

def filter_readings(readings_path, output_path):
    """Filter readings to only show published/ready content."""
    with open(readings_path, 'r') as f:
        data = yaml.safe_load(f)
    
    if not data or 'readings' not in data:
        # Empty or minimal file, just copy as is
        with open(output_path, 'w') as f:
            yaml.dump(data, f, default_flow_style=False, sort_keys=False)
        return
    
    filtered_readings = []
    for week in data['readings']:
        # Skip if marked as draft or not ready
        if week.get('status') == 'draft' or week.get('published') == False:
            continue
        
        # Create clean version
        clean_week = {
            'week': week['week'],
            'topic': week['topic']
        }
        
        if 'description' in week:
            clean_week['description'] = week['description']
        
        # Only include papers marked as ready
        if 'papers' in week:
            ready_papers = []
            for paper in week['papers']:
                if paper.get('status') != 'draft' and paper.get('published') != False:
                    # Remove internal fields
                    clean_paper = {k: v for k, v in paper.items() 
                                 if k not in ['status', 'published', 'internal_notes', 'alternatives']}
                    ready_papers.append(clean_paper)
            
            if ready_papers:
                clean_week['papers'] = ready_papers
            else:
                # No papers ready, show TBD
                clean_week['papers'] = [{
                    'title': 'TBD',
                    'notes': 'Readings will be announced soon'
                }]
        else:
            # No papers listed, show TBD
            clean_week['papers'] = [{
                'title': 'TBD',
                'notes': 'Readings will be announced soon'
            }]
        
        filtered_readings.append(clean_week)
    
    output_data = {'readings': filtered_readings}
    
    with open(output_path, 'w') as f:
        yaml.dump(output_data, f, default_flow_style=False, sort_keys=False, allow_unicode=True)
    
    print(f"✓ Filtered readings: {len(filtered_readings)} weeks ready")

def filter_schedule(schedule_path, output_path):
    """Filter schedule to only show finalized sessions."""
    with open(schedule_path, 'r') as f:
        data = yaml.safe_load(f)
    
    if not data or 'schedule' not in data:
        with open(output_path, 'w') as f:
            yaml.dump(data, f, default_flow_style=False, sort_keys=False)
        return
    
    filtered_schedule = []
    for session in data['schedule']:
        # Skip if marked as draft
        if session.get('status') == 'draft' or session.get('published') == False:
            continue
        
        # Create clean version (remove internal fields)
        clean_session = {k: v for k, v in session.items() 
                        if k not in ['status', 'published', 'internal_notes', 'alternatives']}
        
        # Replace detailed description with TBD if not finalized
        if session.get('finalized') == False or session.get('topic') and 'TBD' in session['topic']:
            clean_session['description'] = 'Details TBD'
        
        filtered_schedule.append(clean_session)
    
    output_data = {'schedule': filtered_schedule}
    
    with open(output_path, 'w') as f:
        yaml.dump(output_data, f, default_flow_style=False, sort_keys=False, allow_unicode=True)
    
    print(f"✓ Filtered schedule: {len(filtered_schedule)} sessions")

def filter_assignments(assignments_path, output_path):
    """Filter assignments to only show published ones."""
    with open(assignments_path, 'r') as f:
        data = yaml.safe_load(f)
    
    if not data or 'assignments' not in data:
        with open(output_path, 'w') as f:
            yaml.dump(data, f, default_flow_style=False, sort_keys=False)
        return
    
    filtered_assignments = []
    for assignment in data['assignments']:
        # Only include published assignments
        if assignment.get('published') == False or assignment.get('status') == 'draft':
            continue
        
        # Remove internal fields
        clean_assignment = {k: v for k, v in assignment.items() 
                          if k not in ['status', 'published', 'internal_notes']}
        
        filtered_assignments.append(clean_assignment)
    
    output_data = {'assignments': filtered_assignments}
    
    if not filtered_assignments:
        output_data = {
            'assignments': [{
                'title': 'Assignment Information Coming Soon',
                'description': 'Assignment details will be posted here as the semester progresses.'
            }]
        }
    
    with open(output_path, 'w') as f:
        yaml.dump(output_data, f, default_flow_style=False, sort_keys=False, allow_unicode=True)
    
    print(f"✓ Filtered assignments: {len(filtered_assignments)} published")

def main():
    course_repo = Path("/Users/tserre/Projects/cpsy1950")
    temp_dir = course_repo / ".website_ready"
    temp_dir.mkdir(exist_ok=True)
    
    print("Preparing course materials for website...")
    print()
    
    # Filter readings
    filter_readings(
        course_repo / "readings/readings.yml",
        temp_dir / "readings.yml"
    )
    
    # Filter schedule
    filter_schedule(
        course_repo / "data/schedule.yml",
        temp_dir / "schedule.yml"
    )
    
    # Filter assignments
    filter_assignments(
        course_repo / "assignments/assignments.yml",
        temp_dir / "assignments.yml"
    )
    
    # Copy other files as-is (videos, resources, structure)
    import shutil
    
    # Videos file
    src = course_repo / "data" / "videos.yml"
    if src.exists():
        shutil.copy(src, temp_dir / "videos.yml")
    
    # Resources file (may be in data/ or resources/ directory)
    resources_src1 = course_repo / "data" / "resources.yml"
    resources_src2 = course_repo / "resources" / "resources.yml"
    if resources_src1.exists():
        shutil.copy(resources_src1, temp_dir / "resources.yml")
    elif resources_src2.exists():
        shutil.copy(resources_src2, temp_dir / "resources.yml")
    
    # Structure file
    src = course_repo / "data" / "structure.yml"
    if src.exists():
        shutil.copy(src, temp_dir / "structure.yml")
    
    print()
    print("✓ Website-ready files created in .website_ready/")
    print()

if __name__ == "__main__":
    main()
