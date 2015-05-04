
package com.soldoutazondb.data;



/**
 *  soldoutazonDB.Category
 *  04/23/2015 09:33:13
 * 
 */
public class Category {

    private Integer id;
    private String name;
    private String started;
    private String completed;
    private Integer prevcount;
    private Integer latestcount;
    private Integer productexistcount;
    private Integer error;
    private Integer search;
    private Integer inconsistent;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStarted() {
        return started;
    }

    public void setStarted(String started) {
        this.started = started;
    }

    public String getCompleted() {
        return completed;
    }

    public void setCompleted(String completed) {
        this.completed = completed;
    }

    public Integer getPrevcount() {
        return prevcount;
    }

    public void setPrevcount(Integer prevcount) {
        this.prevcount = prevcount;
    }

    public Integer getLatestcount() {
        return latestcount;
    }

    public void setLatestcount(Integer latestcount) {
        this.latestcount = latestcount;
    }

    public Integer getProductexistcount() {
        return productexistcount;
    }

    public void setProductexistcount(Integer productexistcount) {
        this.productexistcount = productexistcount;
    }

    public Integer getError() {
        return error;
    }

    public void setError(Integer error) {
        this.error = error;
    }

    public Integer getSearch() {
        return search;
    }

    public void setSearch(Integer search) {
        this.search = search;
    }

    public Integer getInconsistent() {
        return inconsistent;
    }

    public void setInconsistent(Integer inconsistent) {
        this.inconsistent = inconsistent;
    }

}
