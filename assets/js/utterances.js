(()=>{class e{constructor(){this.config=window.params.utterances}run(){const e=this;""==this.config.theme&&(document.addEventListener("hbs:mode",(function(t){e.rerender(e.getTheme(t.detail.mode))})),setTimeout((function(){e.rerender("github-"+localStorage.getItem("hbs-mode"))}),2e3))}getTheme(e){return"dark"===e?"github-dark":"github-light"}rerender(e){var t;const n={type:"set-theme",theme:e},r=document.querySelector(".utterances-frame");null===(t=null==r?void 0:r.contentWindow)||void 0===t||t.postMessage(n,"https://utteranc.es")}}document.addEventListener("DOMContentLoaded",(()=>{(new e).run()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXR0ZXJhbmNlcy5qcyIsIm1hcHBpbmdzIjoiTUFBQSxNQUFNQSxFQUdGQyxjQUNJQyxLQUFLQyxPQUFTQyxPQUFPQyxPQUFPQyxXQUdoQ0MsTUFDSSxNQUFNQyxFQUFPTixLQUVBLElBRERBLEtBQUtDLE9BQU9NLFFBRXBCQyxTQUFTQyxpQkFBaUIsWUFBWSxTQUFTQyxHQUMzQ0osRUFBS0ssU0FBU0wsRUFBS00sU0FBU0YsRUFBRUcsT0FBT0MsVUFFekNDLFlBQVcsV0FDUFQsRUFBS0ssU0FBUyxVQUFZSyxhQUFhQyxRQUFRLGVBQ2hELE1BSVhMLFNBQVNFLEdBQ0wsTUFBZ0IsU0FBVEEsRUFBa0IsY0FBZ0IsZUFHN0NILFNBQVNKLEcsTUFDTCxNQUFNVyxFQUFNLENBQ1JDLEtBQU0sWUFDTlosTUFBT0EsR0FFTGEsRUFBU1osU0FBU2EsY0FBaUMscUJBQ3BDLFFBQXJCLEVBQUFELE1BQUFBLE9BQU0sRUFBTkEsRUFBUUUscUJBQWEsU0FBRUMsWUFBWUwsRUFBSyx3QkFJaERWLFNBQVNDLGlCQUFpQixvQkFBb0IsTUFDM0MsSUFBSVgsR0FBY08sVSIsInNvdXJjZXMiOlsid2VicGFjazovL2h1Z28tdGhlbWUtYm9vdHN0cmFwLy4vc3JjL3V0dGVyYW5jZXMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVXR0ZXJhbmNlcyB7XG4gICAgY29uZmlnOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB3aW5kb3cucGFyYW1zLnV0dGVyYW5jZXM7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHRoZW1lID0gdGhpcy5jb25maWcudGhlbWU7XG4gICAgICAgIGlmICh0aGVtZSA9PSAnJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaGJzOm1vZGUnLCBmdW5jdGlvbihlOiBDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgIHNlbGYucmVyZW5kZXIoc2VsZi5nZXRUaGVtZShlLmRldGFpbC5tb2RlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZXJlbmRlcignZ2l0aHViLScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGJzLW1vZGUnKSk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRoZW1lKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIG1vZGUgPT09ICdkYXJrJyA/ICdnaXRodWItZGFyaycgOiAnZ2l0aHViLWxpZ2h0JztcbiAgICB9XG5cbiAgICByZXJlbmRlcih0aGVtZSkge1xuICAgICAgICBjb25zdCBtc2cgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc2V0LXRoZW1lJyxcbiAgICAgICAgICAgIHRoZW1lOiB0aGVtZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJRnJhbWVFbGVtZW50PignLnV0dGVyYW5jZXMtZnJhbWUnKTtcbiAgICAgICAgaWZyYW1lPy5jb250ZW50V2luZG93Py5wb3N0TWVzc2FnZShtc2csICdodHRwczovL3V0dGVyYW5jLmVzJyk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAobmV3IFV0dGVyYW5jZXMoKSkucnVuKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJVdHRlcmFuY2VzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiY29uZmlnIiwid2luZG93IiwicGFyYW1zIiwidXR0ZXJhbmNlcyIsInJ1biIsInNlbGYiLCJ0aGVtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXJlbmRlciIsImdldFRoZW1lIiwiZGV0YWlsIiwibW9kZSIsInNldFRpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibXNnIiwidHlwZSIsImlmcmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9