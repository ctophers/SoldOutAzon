
package com.soldoutazondb.data;

import java.util.Date;


/**
 *  soldoutazonDB.Node
 *  05/04/2015 09:17:27
 * 
 */
public class Node {

    private Integer id;
    private String category;
    private String subcategory;
    private String url;
    private Date lastupdate;
    private Integer lastcount;
    private Integer errors;
    private Integer inconsistent;
    private Integer duplicate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Date getLastupdate() {
        return lastupdate;
    }

    public void setLastupdate(Date lastupdate) {
        this.lastupdate = lastupdate;
    }

    public Integer getLastcount() {
        return lastcount;
    }

    public void setLastcount(Integer lastcount) {
        this.lastcount = lastcount;
    }

    public Integer getErrors() {
        return errors;
    }

    public void setErrors(Integer errors) {
        this.errors = errors;
    }

    public Integer getInconsistent() {
        return inconsistent;
    }

    public void setInconsistent(Integer inconsistent) {
        this.inconsistent = inconsistent;
    }

    public Integer getDuplicate() {
        return duplicate;
    }

    public void setDuplicate(Integer duplicate) {
        this.duplicate = duplicate;
    }

}
